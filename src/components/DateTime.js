function DateTime(){
    let current = new Date();
    let date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`

    return (
        <div>
            {date}
        </div>
    )
}

export default DateTime;