
interface Props {
    a: string,
    
}

const Locked = (name: Props) => {
    const {a} = name;
    return (
        <>
            <div>Locked: {a}</div>
        </>
    )
}

export default Locked;
