const Form = ({fields}) => {
	return (
		<form className="form">
			{fields.map(([name,Field]) => {
				return (
					<div className="form-group" key={name}>
						<Field name={name} className="form-input" />
					</div>
				)
			})}
			<div className="form-group">
				<button className="btn">Submit</button>
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