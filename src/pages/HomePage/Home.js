import { useState } from 'react';
import Button from '~/components/Button/Button';
import Modal from '~/components/Modal/Modal';

function Home() {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button primary onClick={() => setShow(true)}>
                Đăng nhập
            </Button>
            <Modal show={show} type={1} popup={{ id: 2, header: 'Đăng ký với email' }} />
        </>
    );
}

export default Home;
