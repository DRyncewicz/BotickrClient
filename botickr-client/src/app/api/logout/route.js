import { NextResponse } from 'next/server';
import https from 'https';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
export async function GET(request) {

  const { searchParams } = new URL(request.url);
  const idToken = searchParams.get('idToken');
  const cookies = request.headers.get('cookie');

  const logoutUrl = `${process.env.NEXT_PUBLIC_IDENTITY_SERVER_ISSUER}/connect/endsession`;
  const postLogoutRedirectUri = `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}`;
  const endSessionUrl = `${logoutUrl}?id_token_hint=${idToken}&post_logout_redirect_uri=${encodeURIComponent(postLogoutRedirectUri)}`;

  try {
    const response = await fetch(endSessionUrl, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Cookie': cookies,
      }
    });

    const responseText = await response.text();

    if (response.ok) {
      return NextResponse.redirect(postLogoutRedirectUri);
    } else {
      return NextResponse.json({ success: false, error: responseText }, { status: response.status });
    }
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}