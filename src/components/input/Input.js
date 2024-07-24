const Input = (props) => {
    return <input
        className={props.className}
        required={props.required}
        id={props.id}
        value={props.value}
        type={props.type}
        autoComplete={props.autoComplete}
        onChange={props.onChange}
        placeholder={props.placeholder}
    />
}
export default Input;