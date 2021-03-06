import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

export const TodoItem = ({
	todoContent,
	todoPriority,
	todoDate,
	project,
	id,
	deleteTodo,
}) => {
	let date = moment(todoDate).format("MMM D");
	return (
		<div className="grid grid-cols-2 grid-rows-3 pl-8 mt-10 border-b-2 border-gray-600 bg-gray-200 text-gray-800">
			<p className="col-start-1">{todoContent}</p>
			<p className="col-start-1 row-start-2">{date}</p>
			<p className="col-start-1 row-start-3">Priority: {todoPriority}</p>
			<div className="col-start-2 row-start-1">
				<Link className="text-green-600 font-semibold" to={`/edit/${id}`}>
					Edit
				</Link>{" "}
				|{" "}
				<button
					className="text-red-600 font-semibold"
					onClick={() => deleteTodo(id)}
				>
					Delete
				</button>
			</div>
			<div>
				<p>{project}</p>
			</div>
		</div>
	);
};
