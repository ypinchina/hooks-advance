import { FC, useState } from "react";
export const TabsContainer: FC = () => {
  const [tabActive, setTabActive] = useState("home");
  const btnClick = (name: string) => {
    setTabActive(name)
  }
  return (
    <div style={{height: 500}}>
      <TabButton isActive={tabActive === 'home'} onClick={() => btnClick('home')}>Home</TabButton>
      <TabButton isActive={tabActive === 'movie'} onClick={() => btnClick('movie')}>Movie</TabButton>
      <TabButton isActive={tabActive === 'about'} onClick={() => btnClick('about')}>About</TabButton>
      {/* 按钮区域 */}
      <hr></hr>
      {tabActive === "home" && <HomeTab></HomeTab>}
      {tabActive === "movie" && <MovieTab></MovieTab>}
      {tabActive === "about" && <AboutTab></AboutTab>}
      {/* 标签页区域 */}
    </div>
  );
};
const TabButton: FC<React.PropsWithChildren & { onClick: ()=> void, isActive: boolean }> = (props) => {
  return <button className={["btn", props.isActive ? "active": ''].join(" ")} onClick={props.onClick}>{props.children}</button>;
};
const HomeTab: FC = () => {
  return <>HomeTab</>;
};
const MovieTab: FC = () => {
  return <>MovieTab</>;
};
const AboutTab: FC = () => {
  return <>AboutTab</>;
};
