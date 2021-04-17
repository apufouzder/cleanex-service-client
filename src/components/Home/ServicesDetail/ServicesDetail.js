import { useSpring } from '@react-spring/core';
import { animated } from '@react-spring/web';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './ServicesDetail.css';

const calc = (x, y) => [-(y - window.innerHeight / 5) / 30, (x - window.innerWidth / 2) / 30, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const ServicesDetail = ({ service }) => {
    const { title, imageURL, description, price, _id } = service;
    const history = useHistory();

    const handleBooking = () => {
        history.push(`/booking/${_id}`)
        // setUser({ ...user, service: props.service })
        // console.log({ ...user, service: props.service });

    }
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    return (

        <Col md={4} className="text-center mb-4">
            <animated.div
                class="card"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}>
                <div onClick={() => handleBooking(_id)} className="service p-4 imgHover rounded">

                    <figure><img style={{ height: '50px' }} src={imageURL} alt="" /></figure>
                    <h5 className="my-4">{title}</h5>
                    <p className="text-secondary">{description}</p>
                    <h3>${price}</h3>
                </div>
            </animated.div>
        </Col>
    );
};

export default ServicesDetail;