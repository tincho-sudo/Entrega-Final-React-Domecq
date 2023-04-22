function Flex(props) {
  return (
    <div
      style={{
        height: "auto",
        width: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: "40px",
        marginLeft: "20px",
        marginRight: "20px",
        flexFlow: "row wrap",
      }}
    >
      {props.children}
    </div>
  );
}

export default Flex;
