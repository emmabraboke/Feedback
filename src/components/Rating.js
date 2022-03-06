function Rating({selected,handleChange}) {
    
    return (

        <div className="rating-container">
            <ul className="list">
                <li>
                <input
                type="radio" 
                value="1"
                id="1"
                name="radio"
                checked={selected===1}
                onChange={handleChange}

                />
                <label className={selected==="1"?"label2":"label1"} htmlFor="1">1</label> 
                </li>
                <li>
                <input
                type="radio" 
                value="2"
                id="2"
                name="radio"
                placeholder="1"
                checked={selected===2}
                onChange={handleChange}
               
                />
                <label className={selected==="2"?"label2":"label1"} htmlFor="2">2</label> 
                </li>
                <li>
                <input
                type="radio" 
                value="3"
                id="3"
                name="radio"
                placeholder="1"
                checked={selected===1}
                onChange={handleChange}
                />
                <label className={selected==="3"?"label2":"label1"} htmlFor="3">3</label> 
                </li>
                <li>
                <input
                type="radio" 
                value="4"
                id="4"
                name="radio"
                placeholder="1"
                checked={selected===4}
                onChange={handleChange}
                />
                <label className={selected==="4"?"label2":"label1"} htmlFor="4">4</label> 
                </li>
                <li>
                <input
                type="radio" 
                value="5"
                id="5"
                name="radio"
                placeholder="1"
                checked={selected===5}
                onChange={handleChange}
                />
                <label className={selected==="5"?"label2":"label1"} htmlFor="5">5</label> 
                </li>
                <li>
                <input
                type="radio" 
                value="6"
                id="6"
                name="radio"
                placeholder="1"
                checked={selected===6}
                onChange={handleChange}
                />
                <label className={selected==="6"?"label2":"label1"} htmlFor="6">6</label> 
                </li>
                <li>
                <input
                type="radio" 
                value="7"
                id="7"
                name="radio"
                placeholder="1"
                checked={selected===7}
                onChange={handleChange}
                />
                <label className={selected==="7"?"label2":"label1"} htmlFor="7">7</label> 
                </li>
                <li>
                <input
                type="radio" 
                value="8"
                id="8"
                name="radio"
                placeholder="1"
                checked={selected===8}
                onChange={handleChange}
                />
                <label className={selected==="8"?"label2":"label1"} htmlFor="8">8</label> 
                </li>
                <li>
                <input
                type="radio" 
                value="9"
                id="9"
                name="radio"
                placeholder="1"
                checked={selected===9}
                onChange={handleChange}
                />
                <label className={selected==="9"?"label2":"label1"} htmlFor="9">9</label> 
                </li>
                <li>
                <input
                type="radio" 
                value="10"
                id="10"
                name="radio"
                placeholder="1"
                checked={selected===1}
                onChange={handleChange}
                />
                <label className={selected==="10"?"label2":"label1"} htmlFor="10">10</label> 
                </li>
            </ul>
        </div>
    )
}

export default Rating
