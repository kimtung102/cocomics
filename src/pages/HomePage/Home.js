import { useState } from 'react';
import Button from '~/components/Button/Button';
import Modal from '~/components/Modal/Modal';
import Header from '~/layouts/Header/Header';

function Home() {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button primary onClick={() => setShow(true)}>
                Đăng nhập
            </Button>
            <Modal show={show} type={2} popup={2} />
        </>
    );
}

export default Home;
