import React from "react";
import { Button, Spinner } from "react-bootstrap";

function PostSpinner() {
    return (
        <>
            <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading...
            </Button>
        </>
    )
}

export default PostSpinner
