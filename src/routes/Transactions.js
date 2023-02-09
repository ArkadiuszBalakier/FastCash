import Select from 'react-select'

function Transactions () {

const options =[
    {value: users.Acc1.id, label: users.Acc1.fName }
]


    return(
        <div>
            <Select options={options}></Select>
        </div>
    )
}

export default Transactions;