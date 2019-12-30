const initialState = fields => fields.reduce((a,[{name,value}]) => ({...a, [name]:{value: value || '',touched: false}}),{})
const onChangeField = ({values,setValues}) => ({target: {value, name}}) => setValues({...values, [name]: {value, touched:true}})
const onSubmitExtend= fn => state => e => {
	e.preventDefault()
	// add some validating if is needed
	const values = Object.entries(state).reduce((a,[name,{value}])=> ({...a,[name]:value}), {})
	return fn(values)
}

const Form = ({fields, onSubmit}) => {
	const [values,setValues] = React.useState(initialState(fields))
	return (
		<form className="form">
			{fields.map(([{name},Field])=> {
				return (
					<div className="form-group" key={name}>
						<Field className="form-input" name={name} onChange={onChangeField({values,setValues})} />
					</div>
				)
			})}
			<div className="form-group">
				<button className="btn" onClick={onSubmitExtend(onSubmit)(values)}>Submit</button>
			</div>
		<style jsx>{`
			.form {
				width: 400px;
				display: grid;
				grid-auto-flow: row;
				grid-row-gap: 1rem;
			}
			.form > .form-group {
				width: 100%;
			}
			form > .form-group > .form-input {
				width: 100%;
				box-sizing: border-box;
				padding: 0.25rem;
			}
			.form > .form-group > .btn {
				width: 100%;
				background-color: blue;
				border:none;
				padding: 0.5rem 0;
				color: white;
			}
		`}</style>
		</form>
	)
}

export default Form