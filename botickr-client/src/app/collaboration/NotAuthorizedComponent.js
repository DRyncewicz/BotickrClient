"use client"
import Form from 'react-bootstrap/Form';
import { useSession } from "next-auth/react";
import Button from 'react-bootstrap/Button';

export default function NotAuthorizedComponent() {
    const { data: session, status } = useSession();

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    if (status === "loading") {
        return <div>Loading...</div>;
    }
    if (session?.user?.user_type !== 'organizer') {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center mt-3">
                <h1>Want to cooperate?</h1>
                <h2 className='mt-2'>contact us via form:</h2>
                <div className='w-25'>
                    <Form>
                        <Form.Group className="mt-1 mb-2" controlId="formBasicEmail">
                            <Form.Label>*Email address</Form.Label>
                            <Form.Control required type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicComapnyName">
                            <Form.Label>Company name</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Description of activities and additional information</Form.Label>
                            <Form.Control required as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="*Art. 6 GDPR Lawfulness of processing Art. 7 GDPR Conditions for consent Art. 21 GDPR Right to object Art. 95 GDPR Relationship with Directive 2002/58/EC" />
                        </Form.Group>
                        <div className='d-flex justify-content-center'>
                            <Button variant="secondary w-50" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}