export default function SideBar(props) {
  const { handleToggleModal, data } = props;
  return (
    <div className="sidebar">
      <div onClick={handleToggleModal} className="bgOverlay"></div>
      <div>
        <h2>{data?.title}</h2>
        <div className="sidebarContents">
          <p>Description</p>
          <p>
            {data?.explanation}
          </p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-right-long"></i>
        </button>
      </div>
    </div>
  );
}
