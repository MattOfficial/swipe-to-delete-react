import SwipeToDelete from "./components/SwipeToDelete";
import Box from "./components/Box";
import "./App.css";

const data = [
	{
		id: 1,
		title: "This is a title innit",
		body: "This is the body of that title. This can be anything. No one will read it.",
		date: "12/05/1997",
	},
	{
		id: 2,
		title: "This is a title innit",
		body: "This is the body of that title. This can be anything. No one will read it.",
		date: "12/05/1998",
	},
	{
		id: 3,
		title: "This is a title innit",
		body: "This is the body of that title. This can be anything. No one will read it.",
		date: "12/05/1999",
	},
	{
		id: 4,
		title: "This is a title innit",
		body: "This is the body of that title. This can be anything. No one will read it.",
		date: "12/05/2000",
	},
	{
		id: 5,
		title: "This is a title innit",
		body: "This is the body of that title. This can be anything. No one will read it.",
		date: "12/05/2001",
	},
	{
		id: 6,
		title: "This is a title innit",
		body: "This is the body of that title. This can be anything. No one will read it.",
		date: "12/05/2002",
	},
	{
		id: 7,
		title: "Deleted innit",
		body: "This is deleted mf. Get outta here.",
		date: "02/11/2022",
	},
];

const background = (
	<Box
		item={data[6]}
		style={{ height: "100px", width: "100vw", background: "#c3c3c3" }}
	/>
);

// On delete event handler.
// Returns the event. Has to be handled by the devs
const onDelete = (e) => {
	console.log(e);
};

// These are the required props.
// Remove everything else.
const list = data.map((item) => (
	<SwipeToDelete
		key={item.id}
		tag="div"
		background={background}
		onDelete={onDelete}
	>
		<Box
			item={item}
			style={{ height: "100px", width: "100vw", backgroundColor: "#2c4401" }}
		/>
	</SwipeToDelete>
));

function App() {
	return (
		<div className="App">
			<div>
				<h1>This is swipe to delete</h1>
				<h3>This is local implementation</h3>
			</div>
			<div>
				<div style={{ listStyle: "none" }}>{list}</div>
			</div>
		</div>
	);
}

export default App;
