import React, {useState} from 'react';

function ShoppingEdit(props) {
    const [item, setItem] = useState({});
    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <form action="">
                        <div className="row">
                        <div className="col-sm-5">
                            <label htmlFor="name">
                                Name
                            </label>
                            <input type="text" value={item.name} id="name" onChange={event => {setItem({...item, name: event.target.value})}} className={"form-control"}/>
                        </div>
                            <div className="col-sm-2 form-group">
                                <label htmlFor="amount">Amount</label>
                                <input type="number" value={item.amount} onChange={event => {setItem({...item, amount: event.target.value})}} id={"amount"} className={"form-control"}/>
                            </div>
                </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <button className="btn btn-success" type="submit" onClick={(event) => {if(item) {
                                    event.preventDefault();
                                    props.addItem(item);
                                }}}>Add</button>
                                <button className="btn btn-danger" type="button">Delete</button>
                                <button className="btn btn-primary" type="button">Clear</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ShoppingEdit;