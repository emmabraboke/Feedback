
function Button({children,backgroundColor,color,height,width,isdisabled,selected}) {
    const styles = {
        backgroundColor: (isdisabled || selected==null) ? backgroundColor : "rgb(14, 10, 37)",
        color: (isdisabled || selected==null) ? color : "white",
        height: height,
        border: "none",
        width: width,
        // opacity: (isdisabled || selected==null) ? 0.5 : 1,
        fontWeight : "600",
        textAlign: "center",
        padding: "3px",
        borderRadius: "5px"


    }

    const disabled = ()=> isdisabled  ? "disabled": selected===null? "disabled":null
    return (
        
            <button style={styles} disabled={disabled()}>
                {children}
            </button>
        
    )
}

export default Button
