import "./grid.css";

export default function Grid({ grid_items_list }) {
  const final_items_list = grid_items_list.map((item) => (
    <GridItem item={item} />
  ));
  return final_items_list;
}

function GridItem({ item }) {
  return (
    <div className="grid_item">
      <img src={item.img_url} alt="img" />
      <h3>{item.title}</h3>
      <h4>{item.details}</h4>
    </div>
  );
}
