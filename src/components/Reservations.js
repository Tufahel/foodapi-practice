import { useEffect, useState } from "react";

function Reservations(props) {
    const { id } = props;
    const url = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/nolPA6A8i8n8Qi2zMdgc/reservations";
    const [data, setData] = useState({
        item_id: id,
        username: '',
        date_start: '',
        date_end: ''
    })
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        fetchReservations();
    }, []);

    const fetchReservations = async () => {
        const response = await fetch(`${url}?item_id=${id}`)
            .then((res) => res.json())
        console.log('reservations of id: ', id, response);
        setReservations(response);
    }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log('Reservation id: ', id);
        console.log('submit reservation result: ', res);
        fetchReservations();
        return res;
    }
    return (
        <div className="modal-desc">
            {
                reservations.length > 0 && reservations.map((reserv) => (
                    <div key={id}>
                        <h1>
                            Name: {reserv.username}
                        </h1>
                        <p>
                            Start: {reserv.date_start}
                        </p>
                        <p>
                            End: {reserv.date_end}
                        </p>
                        <hr />
                    </div>
                ))}
            <form action="" onSubmit={handleSubmit}>
                <input placeholder="username" type="text" name="username" minLength="1" maxLength="50" onChange={handleChange} value={data.username} required />
                <input placeholder="start date" type="date" name="date_start" minLength="1" maxLength="50" onChange={handleChange} value={data.date_start} required />
                <input placeholder="end date" type="date" name="date_end" minLength="1" maxLength="50" onChange={handleChange} value={data.date_end} required />
                <button type="submit">Reserve Now</button>
            </form>
        </div>
    );
}

export default Reservations;