export const TabelItems = ({ classes, item }) => {
    return (
      <div className={classes}>
        <span>{item.Name}</span>
        <span>{item.Account}</span>
        <span>{item.Category}</span>
        <span>{item.FormData}</span>
        <span>{item.ToDate}</span>
        <span>{item.FromFax}</span>
        <span>{item.ToFax}</span>
      </div>
    );
  };