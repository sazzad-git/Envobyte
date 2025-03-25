function ActiveTitle({
  nameList,
  activeClass,
  normalClass,
  activeTab,
  setActiveTab,
}) {
  return (
    <>
      {nameList.map((name) => (
        <a
          href={`#${name.name}`}
          key={name.id}
          className={`text-[16px] uppercase cursor-pointer ${
            activeTab === `${name.name}` ? `${activeClass}` : `${normalClass}`
          }`}
          onClick={() => setActiveTab(name.name)}
        >
          {name.name}
        </a>
      ))}
    </>
  );
}

export default ActiveTitle;
