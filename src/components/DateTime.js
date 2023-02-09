function DateTime(){
    let current = new Date();
    let date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`

    return (
        <div>
            <p>{date}</p>
        </div>
    )
}

export default DateTime;