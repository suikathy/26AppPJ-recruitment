import React, { useState, useEffect, useRef } from "react";

const useScrollReveal = (threshold = 0.2) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current); // 一度発火したら監視を解除
        }
      },
      { threshold } // 要素が何%見えたら発火するか
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return [ref, isVisible];
};

const AppleLogo = ({ className, color = "#8DC619" }) => (
  <svg
    className={className}
    viewBox="0 0 133 73"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M46.9932 23.0669C47.4137 19.3363 49.0511 11.5771 52.2371 10.3857"
      stroke={color}
      strokeWidth="7"
      strokeLinecap="square"
    />
    <path
      d="M39.6983 59.3435C37.1008 59.8416 34.4256 59.9433 31.7696 59.6217C28.4822 59.2236 27.0368 55.0118 23.9896 53.2661C20.9424 51.5207 16.5785 52.404 14.5724 49.7699C12.9516 47.6414 11.6863 45.2824 10.8023 42.7898L10.8463 42.815C8.37263 35.9712 8.80905 28.1253 12.7102 21.3162C17.9175 12.2276 27.84 7.52875 37.629 8.53657C41.089 8.89284 42.1709 14.0847 45.3833 15.9253C53.1514 20.3753 53.6222 16.0731 55.6796 18.8772C61.5002 26.8117 62.4659 37.748 57.2587 46.8368C53.3576 53.6458 46.8095 57.9906 39.6542 59.3182L39.6983 59.3435Z"
      fill={color}
    />
    <path
      d="M73.536 22.8005H78.9L83.004 48.0005H79.044L78.324 42.9965V43.0685H73.824L73.104 48.0005H69.432L73.536 22.8005ZM77.856 39.6485L76.092 27.1925H76.02L74.292 39.6485H77.856ZM84.9252 22.8005H90.7572C92.7252 22.8005 94.2012 23.3285 95.1852 24.3845C96.1692 25.4405 96.6612 26.9885 96.6612 29.0285V31.5125C96.6612 33.5525 96.1692 35.1005 95.1852 36.1565C94.2012 37.2125 92.7252 37.7405 90.7572 37.7405H88.8852V48.0005H84.9252V22.8005ZM90.7572 34.1405C91.4052 34.1405 91.8852 33.9605 92.1972 33.6005C92.5332 33.2405 92.7012 32.6285 92.7012 31.7645V28.7765C92.7012 27.9125 92.5332 27.3005 92.1972 26.9405C91.8852 26.5805 91.4052 26.4005 90.7572 26.4005H88.8852V34.1405H90.7572ZM98.8119 22.8005H104.644C106.612 22.8005 108.088 23.3285 109.072 24.3845C110.056 25.4405 110.548 26.9885 110.548 29.0285V31.5125C110.548 33.5525 110.056 35.1005 109.072 36.1565C108.088 37.2125 106.612 37.7405 104.644 37.7405H102.772V48.0005H98.8119V22.8005ZM104.644 34.1405C105.292 34.1405 105.772 33.9605 106.084 33.6005C106.42 33.2405 106.588 32.6285 106.588 31.7645V28.7765C106.588 27.9125 106.42 27.3005 106.084 26.9405C105.772 26.5805 105.292 26.4005 104.644 26.4005H102.772V34.1405H104.644ZM112.699 22.8005H118.531C120.499 22.8005 121.975 23.3285 122.959 24.3845C123.943 25.4405 124.435 26.9885 124.435 29.0285V31.5125C124.435 33.5525 123.943 35.1005 122.959 36.1565C121.975 37.2125 120.499 37.7405 118.531 37.7405H116.659V48.0005H112.699V22.8005ZM118.531 34.1405C119.179 34.1405 119.659 33.9605 119.971 33.6005C120.307 33.2405 120.475 32.6285 120.475 31.7645V28.7765C120.475 27.9125 120.307 27.3005 119.971 26.9405C119.659 26.5805 119.179 26.4005 118.531 26.4005H116.659V34.1405H118.531ZM125.482 48.1445C124.762 48.1445 124.15 48.0965 123.646 48.0005V44.4005C124.03 44.4965 124.462 44.5445 124.942 44.5445C125.734 44.5445 126.322 44.3525 126.706 43.9685C127.09 43.5605 127.282 42.9485 127.282 42.1325V22.8005H131.242V42.0245C131.242 44.0885 130.762 45.6245 129.802 46.6325C128.866 47.6405 127.426 48.1445 125.482 48.1445Z"
      fill={color}
    />
  </svg>
);
// --- リンゴの共通パーツ（前回と同じ） ---
const AppleShape = ({ fillColor, className }) => (
  <svg
    viewBox="0 0 958 939"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M723.058 145.361L718.463 147.079C708.987 150.622 700.114 159.303 692.011 172.005C683.963 184.622 677.028 200.651 671.196 217.977C659.535 252.615 652.535 291.665 649.679 317.015L649.129 321.889L639.381 320.791L639.93 315.916C642.841 290.083 649.957 250.316 661.898 214.846C667.866 197.117 675.103 180.269 683.741 166.729C692.323 153.275 702.648 142.52 715.027 137.89L719.621 136.172L723.058 145.361Z"
      fill="#111111"
    />
    <path
      d="M544.598 814.17C508.963 821.004 472.267 822.399 435.83 817.987C390.73 812.526 370.904 754.743 329.099 730.792C287.294 706.842 227.419 718.965 199.897 682.821C177.662 653.619 160.305 621.258 148.178 587.06L148.782 587.407C114.846 493.513 120.84 385.871 174.359 292.453C245.798 167.758 381.925 103.292 516.221 117.121C563.69 122.009 578.525 193.245 622.599 218.495C729.17 279.55 735.628 220.512 763.854 258.99C843.707 367.848 856.945 517.885 785.507 642.581C731.988 735.999 642.161 795.613 543.998 813.826L544.598 814.17Z"
      fill={fillColor}
    />
  </svg>
);

// --- Nav, Hero 周りのコンポーネント ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 画面幅によるスマホ判定
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => {
      // Heroセクション（画面の高さ）を超えたあたりでスタイルを切り替える
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // スマホ版では常に白色、PC版はスクロールに応じて色を変える
  const logoColor = "#F5F5F5"; // スマホ版は常に白

  return (
    <div className={`md:fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-500 ${!isMobile && isScrolled ? 'md:pt-4' : 'pt-6 md:pt-6'}`}>
      <div className="w-full max-w-[1440px] px-6 md:px-12">
        <div
          className={`rounded-[30px] md:rounded-full flex justify-between items-start md:items-center transition-all duration-500 ${
            !isMobile && isScrolled
              ? "bg-[#f5f5f5] py-2 px-6 md:px-8 shadow-[10px_10px_0px_0px_#4b6b25]"
              : "bg-transparent py-2 px-0 md:px-4 shadow-none"
          }`}
        >
          {/* 左側のロゴ部分 */}
          <div className="hidden md:block pt-1 md:pt-0">
            <AppleLogo 
            className="w-auto h-10 md:h-12 transition-colors duration-500" 
            color={isScrolled ? "#8DC619" : "#F5F5F5"} 
          /></div>
          

          <div className="md:hidden pt-1 md:pt-0">
            <AppleLogo 
              className="w-auto h-[50px]  transition-colors duration-500" 
              color={logoColor} // スマホ版は常に白色、PC版はスクロールに応じて色変化
            />
          </div>

          {/* 右側のナビゲーションとボタン（画像通りの右揃え縦並びに修正） */}
          <div className="flex flex-col items-end gap-2 md:flex-row md:items-center md:gap-10 font-bold text-black pt-1 md:pt-0">
            <a
              href="#entry"
              className="bg-[#FF4B4B] text-white px-4 py-1.5 md:px-6 md:py-4 rounded-full hover:bg-opacity-90 transition-all text-[14px] md:text-base tracking-wider order-1 md:order-2 mb-1 md:mb-0"
            >
              応募フォーム
            </a>
            
            <div className="flex flex-col items-end gap-1.5 md:flex-row md:items-center md:gap-10 order-2 md:order-1 md:mr-6 text-[14px] md:text-base pr-1 md:pr-0">
              <a href="#features" className="hover:text-black/70 md:hover:text-[#8CC63F] transition-colors tracking-widest">機能</a>
              <a href="#jobs" className="hover:text-black/70 md:hover:text-[#8CC63F] transition-colors tracking-widest">仕事内容</a>
              <a href="#members" className="hover:text-black/70 md:hover:text-[#8CC63F] transition-colors tracking-widest">メンバー</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BigAppleSVG = () => {
  const applePaths = (fillColor, strokeColor) => (
    <>
      <path
        d="M723.058 145.361L718.463 147.079C708.987 150.622 700.114 159.303 692.011 172.005C683.963 184.622 677.028 200.651 671.196 217.977C659.535 252.615 652.535 291.665 649.679 317.015L649.129 321.889L639.381 320.791L639.93 315.916C642.841 290.083 649.957 250.316 661.898 214.846C667.866 197.117 675.103 180.269 683.741 166.729C692.323 153.275 702.648 142.52 715.027 137.89L719.621 136.172L723.058 145.361Z"
        fill={strokeColor || "#5A4444"}
      />
      <path
        d="M544.598 814.17C508.963 821.004 472.267 822.399 435.83 817.987C390.73 812.526 370.904 754.743 329.099 730.792C287.294 706.842 227.419 718.965 199.897 682.821C177.662 653.619 160.305 621.258 148.178 587.06L148.782 587.407C114.846 493.513 120.84 385.871 174.359 292.453C245.798 167.758 381.925 103.292 516.221 117.121C563.69 122.009 578.525 193.245 622.599 218.495C729.17 279.55 735.628 220.512 763.854 258.99C843.707 367.848 856.945 517.885 785.507 642.581C731.988 735.999 642.161 795.613 543.998 813.826L544.598 814.17Z"
        fill={fillColor}
      />
    </>
  );

  return (
    <div className="relative w-full aspect-square md:w-full md:h-full">
      {/* 影の部分 */}
      <svg viewBox="0 0 958 939" className="absolute top-[8%] left-[8%] md:top-[50px] md:left-[60px] w-full h-full opacity-100">
        {applePaths("#4b6b25", "#4b6b25")}
      </svg>
      {/* 白いリンゴ本体 */}
      <svg viewBox="0 0 958 939" className="relative w-full h-full">
        {applePaths("#F5F5F5", "#5A4444")}
      </svg>
    </div>
  );
};

const ScrollIndicator = () => (
  // Flexboxで線と文字を横並びにする
  <div className="flex flex-row items-center h-32">
    {/* 垂直の棒 */}
    <div className="w-[5px] h-full bg-white rounded-full"></div>

    {/* 文字用のコンテナ：線との間に余白を空け、はみ出した文字を隠す */}
    <div className="ml-1 h-full relative overflow-hidden w-10">
      {/* 動く文字 */}
      <div
        className="absolute right-0 font-medium text-white text-[20px] md:text-[20px] whitespace-nowrap animate-scroll-vertical tracking-widest origin-top-left font-sans"
        style={{ writingMode: "vertical-rl" }}
      >
        <span className="hidden md:block">SCROLL!!</span>
        <span  className="md:hidden">SWIPE!!</span>
      </div>
    </div>
  </div>
);


const Hero = () => {
  return (
    <section className="bg-[#8CC63F] w-full h-[100svh] min-h-[600px] md:min-h-screen relative overflow-hidden">
      <div className="w-full h-full max-w-[1440px] mx-auto relative flex items-center justify-center">

        {/* --- PC用レイアウト (md:flex) --- */}
        <div className="hidden md:flex relative w-[800px] h-[800px] items-center justify-center pointer-events-auto z-10">
          <div className="opacity-0 animate-scale-in w-full h-full">
            <BigAppleSVG />
          </div>
          <div className="absolute top-[15%] left-[-100px] z-20 pointer-events-none text-left">
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h1 className="text-[144px] font-black text-black leading-[1.05]">
                AppPJ<br />メンバー<br />募集。
              </h1>
            </div>
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <p className="text-2xl font-bold text-black mt-6 ml-2">できたら、やばい。</p>
            </div>
          </div>
          <div className="absolute bottom-[10%] right-[-5%] z-30 pointer-events-none">
            <div className="opacity-0 animate-pop-in bg-[#FF4B4B] text-white w-40 h-40 rounded-full flex flex-col items-center justify-center font-bold" style={{ animationDelay: '0.8s' }}>
              <span className="text-2xl tracking-widest">2月28日</span>
              <span className="text-2xl tracking-widest mt-0.5">まで！</span>
            </div>
          </div>
        </div>

        {/* --- スマホ用レイアウト (md:hidden) --- */}
        
        {/* リンゴ */}
        <div className="md:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-[420px] z-10 pointer-events-none">
          <div className="opacity-0 animate-scale-in">
            <BigAppleSVG />
          </div>
        </div>
        
        {/* キャッチコピー */}
        <div className="md:hidden absolute top-[30%] left-[8%] z-20 pointer-events-none text-left">
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h1 className="text-[54px] font-black text-black leading-[1.05] tracking-tight">
              AppPJ<br />メンバー<br />募集。
            </h1>
          </div>
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <p className="text-[14px] font-bold text-black mt-3 ml-1">できたら、やばい。</p>
          </div>
        </div>

        {/* 期限バッジ */}
        <div className="md:hidden absolute bottom-[8%] right-[8%] z-30 pointer-events-none">
          <div className="opacity-0 animate-pop-in bg-[#FF4B4B] text-white w-[100px] h-[100px] rounded-full flex flex-col items-center justify-center font-bold shadow-lg" style={{ animationDelay: '0.8s' }}>
            <span className="text-[16px] tracking-widest leading-tight">2月28日</span>
            <span className="text-[16px] tracking-widest leading-tight">まで！</span>
          </div>
        </div>

        {/* SWIPE!! (共通) */}
        <div className="absolute bottom-[8%] left-[6%] md:bottom-[12%] md:left-auto md:right-[5%] z-40">
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <ScrollIndicator />
          </div>
        </div>

      </div>
    </section>
  );
};
const ConceptSection = () => {
  const [ref, isVisible] = useScrollReveal(0.3); // 30%見えたらアニメーション開始

  return (
    <section className="px-10 md:px-20 relative mb-40 bg-[#8CC63F] overflow-hidden py-24">
      <div className="z-10 max-w-7xl mx-auto" ref={ref}>
        <div>
          {/* 見出し */}
          <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="text-6xl md:text-[10vw] font-black leading-[1.1] font-bold text-[#f5f5f5] mb-12 tracking-tighter">
              できたら、<br />やばい。
            </h2>
          </div>

          {/* テキスト段落（順番にフワッと出るようにdelayを設定） */}
          <div className="space-y-10 text-xl md:text-2xl font-bold leading-loose text-black">
            <p className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: '0.2s' }}>
              早稲田祭初のアプリを作る。<br />僕は、なんでそんなことするのか。<br />ただ、見てみたくなったから。
            </p>
            <p className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: '0.4s' }}>
              僕たちが作ったアプリで<br />来場者・さんさんが企画を楽しんでる瞬間。<br />隈ステのバックスクリーンで広報されてる瞬間。<br />早稲田を、日本を、世界を震わせる瞬間。
            </p>
            <p className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: '0.6s' }}>
              能力だって、調整だって、<br />アプリの意義だって、全部後付け。
            </p>
            <p className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: '0.8s' }}>
              できたら、やばい。できたら、やばい。<br />本当にできてしまったら、やばい。<br />をともに実現しよう。
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-10 right-0 h-[90%] z-0 pointer-events-none">
        <img src="../src/assets/tree.png" alt="" className="max-h-full relative hidden md:block" style={{ objectPosition: "right center" }} />
        <AppleShape className="absolute bottom-20 w-20 h-auto fill-[#f5f5f5]" />
        <AppleShape className="absolute bottom-30 left-1/4 rotate-[-60deg] w-25 h-auto fill-[#FF4B4B]" />
      </div>
    </section>
  );
};
const SmartPhoneImages = {
  map: "src/assets/appimage1.png", // 01: 地図
  timetable: "src/assets/appimage2.png", // 02: タイムテーブル
  goods: "src/assets/appimage3.png", // 03: マイタイムテーブル (画像内容から推測)
};

const SectionTitle = ({ enTitle, jaTitle, className = "" }) => (
  // classNameを追加で受け取れるようにしておくと、特定の場所だけ余白を変えたい時などに便利です
  <div
    className={`relative z-10 max-w-3xl md:max-w-7xl mx-auto mb-15 md:mb-20 ${className}`}
  >
    {/* 背面の英語タイトル (Bebas Neue) */}
    <h2 className="absolute top-0 md:-top-20 left-0 font-bebas text-[64px] md:text-[220px] text-white leading-none tracking-wider pointer-events-none">
      {enTitle}
    </h2>
    {/* 前面の日本語タイトル */}
    <h2 className="relative z-10 text-5xl md:text-8xl font-black text-black pt-5 md:pt-10">
      {jaTitle}
    </h2>
  </div>
);



const WindingDottedLine = () => (
  // 修正：赤線をずっと下（top-[100px]~）にずらし、デザイン通りAppleや画像を通過するように。
  <div className="hidden md:block absolute top-50 left-0 w-full h-[120%] pointer-events-none z-0 overflow-hidden">
    <svg
      width="1440"
      height="2007"
      viewBox="0 0 1440 2007"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1000px] md:w-[1280px] h-auto opacity-100 z-0"
    >
      <path
        d="M-234 4.99951C320.164 10.6535 1414.66 93.353 1359.35 378.919C1290.21 735.876 -317.341 1266.98 99.98 1568.52C433.837 1809.76 1231.77 1958.02 1589 2002"
        stroke="#F94949"
        strokeWidth="10"
        strokeDasharray="10 10"
      />
    </svg>
  </div>
);

const RequirementSection = () => {
  return (
    <>
    
      <section className="px-6 md:px-0 max-w-7xl m-0 mx-auto bg-[#8CC63F] mb-40    w-full space-y-20 relative ">
        <SectionTitle
          enTitle="REQUIREMENT"
          jaTitle="機能"
        />
        <WindingDottedLine />
        
        <div className="md:flex w-full md:max-w-7xl items-center justify-between  relative z-20">
          <div className="relative ">
            {/* <RequirementTitle number="01" detailTitle="地図機能付き企画検索" /> */}
            <h1 className="font-bebas text-5xl md:text-9xl text-white relative z-10">
              01
              <h2 className="absolute bottom-0 md:bottom-5 text-2xl md:text-5xl text-black font-bold">
                地図機能付き企画検索
              </h2>
            </h1>

            <p className="mt-4 text-[18px] md:text-2xl font-medium leading-[2.5] md:leading-[2] relative z-10">
              早稲田祭の「場所」と「企画」を<br className="md:hidden"/>直感的に繋ぐ、<br className="md:hidden"/>アプリの中核機能！！
              <br />
              早稲田・戸山の全範囲、<br className="md:hidden"/>全企画を網羅予定。
              <br />
              これがあれば早稲田祭でもう迷わない！
              <br />
              飲食屋台に特化した特別な機能も!?
            </p>

            <img className="absolute z-0 top-10 left-50 w-[340px] h-full object-cover md:hidden opacity-30 overflow-visible" src="src/assets/appimage1.png" />
          </div>

          <img className="hidden md:block" src="src/assets/appimage1.png" />
          
        </div>

        <div className="md:flex md:flex-row-reverse items-center justify-between w-full md:max-w-7xl relative z-20">
          <div className="md:self-start md:w-[450px] relative">
            <h1 className="font-bebas text-5xl md:text-9xl text-white relative text-right">
              02
              <h2 className="absolute bottom-0 md:bottom-5 text-2xl md:text-5xl text-black font-bold right-0">
                タイムテーブル
              </h2>
            </h1>
            <p className="text-[18px] md:text-2xl font-medium leading-[2.5] md:leading-[2] text-right z-10">
              時系列で企画を把握！
              <br />
              当日の動きを最適化し、
              <br />
              もっと早稲田祭を楽しもう。
            </p>

            <img className="md:hidden absolute z-0 top-50 left-[50%] transform -translate-x-1/2 w-[190px] h-full object-cover opacity-30 overflow-visible" src="src/assets/appimage2.png" alt="アプリ画面" />
          </div>

          <img className="hidden md:block" src="src/assets/appimage2.png" alt="アプリ画面" />

          <div className="md:w-[450px] md:self-end mt-50 md:mt-0 relative">
            <h1 className="font-bebas text-5xl md:text-9xl text-white relative ">
              03
              <h2 className="absolute bottom-0 md:bottom-5 text-2xl md:text-5xl text-black font-bold">
                マイタイムテーブル
              </h2>
            </h1>
            <p className="text-[18px] md:text-2xl font-medium leading-[2.5] md:leading-[2] z-100">
              お気に入り企画を登録して、
              <br />
              自分だけのスケジュールを作成！
              <br />
              プッシュ通知で
              <br />
              目当ての企画を逃さない！
            </p>
          </div>
        </div>

        <div className="md:flex md:max-w-7xl  items-center justify-between w-full relative z-20">
          <img className="hidden md:block ml-20" src="src/assets/appimage3.png" />
          <div className="relative">
            <h1 className="font-bebas text-5xl md:text-9xl text-white relative text-right z-10">
              04
              <h2 className="absolute bottom-0 md:bottom-5 text-2xl md:text-5xl text-black font-bold right-0 ">
                グッズ情報
              </h2>
            </h1>

            <p className="text-[18px] md:text-2xl font-medium leading-[2.5] md:leading-[2] text-right z-10">
              公式グッズの情報も丸わかり！！
              <br />
              リアルタイムで在庫情報を確認！
              <br />
              地図機能と連動してスムーズな販売、
              <br />
              混雑の緩和を目指します！
            </p>

            <img className="md:hidden absolute z-0 top-10 left-[-50px]  w-[190px] h-full object-cover opacity-30 overflow-visible" src="src/assets/appimage3.png" alt="アプリ画面" />
          </div>
        </div>
      </section>
    </>
  );
};

const RolesSection = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [hoveredRole, setHoveredRole] = useState(null); // ホバーしている役職のIDを管理

  // 役職データを「制作班」と「企画戦略班」の2グループに分割
  const roleGroups = [
    {
      groupName: "・制作班",
      roles: [
        {
          id: "engineer",
          title: "エンジニア",
          dialogTitle: "エンジニア",
          color: "text-[#8CC63F]",
          description:
            "フロントエンド・バックエンドともにコードやサービスを使って実装していきます。今回は、ReactNativeというフレームワーク、言語を使用する予定です。",
          image: "src/assets/jobimage1.png",
        },
        {
          id: "designer",
          title: "デザイナー",
          dialogTitle: "デザイナー",
          color: "text-[#8CC63F]",
          description:
            "アプリのページデザイン、UIパーツデザイン、地図データデザイン、アプリ広報の際に生じるデザインなど、AppPJに関わる全てのデザインを担当します。",
          image: "src/assets/jobimage2.png",
        },
      ],
    },
    {
      groupName: "・企画戦略班",
      roles: [
        {
          id: "planner",
          title: "アプリ広報\nプランナー",
          dialogTitle: "アプリ広報プランナー",
          color: "text-[#8CC63F]",
          description:
            "・SNS、YouTube、サイトを用いた広報コンテンツを構想します。\n・アプリ認知度向上のためのユニークな広報企画を立案、実行します。",
          image: "src/assets/jobimage3.png",
        },
        {
          id: "ux-designer",
          title: "アプリ体験\nデザイナー",
          dialogTitle: "アプリ体験デザイナー",
          color: "text-[#8CC63F]",
          description:
            "・アプリ内のユーザー体験向上のためのアプリ独自の企画、コンテンツを立案、実行します。\n・アプリと他チームの連携企画の調整および運営をします。",
          image: "src/assets/jobimage4.png",
        },
      ],
    },
  ];

  return (
    <section
      id="jobs"
      className="px-6 md:px-20 md:mb-30 bg-[#8CC63F] md:py-24 relative w-full"
    >
      <SectionTitle enTitle="ROLES" jaTitle="仕事内容" />

      {/* 役職カードのコンテナ: 横幅いっぱいに広げる */}
      <div className="w-full max-w-7xl mx-auto relative z-10">
        {roleGroups.map((group, groupIndex) => (
          <div key={groupIndex} className={groupIndex > 0 ? "mt-24" : ""}>
            {/* グループタイトル */}
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-wider">
              {group.groupName}
            </h3>

            {/* グループ内のカードグリッド */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-16">
              {group.roles.map((role) => {
                const isHovered = hoveredRole === role.id;

                return (
                  <button
                    key={role.id}
                    onClick={() => setSelectedRole(role)}
                    onMouseEnter={() => setHoveredRole(role.id)}
                    onMouseLeave={() => setHoveredRole(null)}
                    // ホバー時に右下に10px移動させ、影を消すことで「ボタンを押し込む」挙動を再現
                    className="bg-[#F5F5F5] rounded-full md:rounded-[40px] px-8 py-8 md:px-12 md:py-10 flex items-center justify-between shadow-[10px_10px_0px_0px_#4b6b25] hover:translate-x-[10px] hover:translate-y-[10px] hover:shadow-none transition-all duration-200 w-full text-left"
                  >
                    <span
                      className={`text-3xl md:text-4xl lg:text-5xl font-black ${role.color} whitespace-pre-wrap leading-tight`}
                    >
                      {role.title}
                    </span>
                    {/* リンゴのアイコン (ホバー状態に応じて色を切り替え) */}
                    <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 flex items-center justify-center ml-4">
                      {/* 既存のAppleShapeコンポーネントを使用 */}
                      <AppleShape
                        className="w-full h-full transition-colors duration-200"
                        fillColor={isHovered ? "#FF4B4B" : "#8CC63F"}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* 詳細ダイアログ (モーダル) */}
      {selectedRole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div
            className="bg-[#F5F5F5] w-full max-w-5xl rounded-[50px] p-8 md:p-16 relative shadow-[15px_15px_0px_0px_#4b6b25] animate-in fade-in zoom-in duration-300 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 閉じるボタン */}
            <button
              onClick={() => setSelectedRole(null)}
              className="absolute top-6 right-8 text-5xl font-bold text-gray-400 hover:text-[#FF4B4B] transition-colors"
            >
              ×
            </button>

            {/* ① タイトルを一番上に配置（Flexboxの外） */}
            <h3
              className={`text-4xl md:text-5xl font-black mb-10 ${selectedRole.color} leading-tight`}
            >
              {selectedRole.dialogTitle}
            </h3>

            {/* ② 画像と説明文を横並びのFlexboxに */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 w-full">
              {/* 左側：画像 */}
              <div className="w-full md:w-2/5 flex justify-center md:justify-start">
                <div className="w-64 h-64 flex items-center justify-center">
                  <img
                    src={selectedRole.image}
                    alt={selectedRole.title.replace("\n", "")}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/300?text=Illustration";
                    }}
                  />
                </div>
              </div>

              {/* 右側：説明文 */}
              <div className="w-full md:w-3/5">
                {/* whitespace-pre-wrap を追加して \n で改行されるように変更 */}
                <p className="text-xl md:text-2xl font-bold leading-[2] text-black whitespace-pre-wrap">
                  {selectedRole.description}
                </p>
              </div>
            </div>
          </div>
          {/* 背景クリックで閉じるためのオーバーレイ */}
          <div
            className="absolute inset-0 -z-10"
            onClick={() => setSelectedRole(null)}
          ></div>
        </div>
      )}
    </section>
  );
};

// --- 共通のSVGパスデータ ---
const APPLE_BODY_PATH =
  "M544.598 814.17C508.963 821.004 472.267 822.399 435.83 817.987C390.73 812.526 370.904 754.743 329.099 730.792C287.294 706.842 227.419 718.965 199.897 682.821C177.662 653.619 160.305 621.258 148.178 587.06L148.782 587.407C114.846 493.513 120.84 385.871 174.359 292.453C245.798 167.758 381.925 103.292 516.221 117.121C563.69 122.009 578.525 193.245 622.599 218.495C729.17 279.55 735.628 220.512 763.854 258.99C843.707 367.848 856.945 517.885 785.507 642.581C731.988 735.999 642.161 795.613 543.998 813.826L544.598 814.17Z";
const APPLE_STEM_PATH =
  "M723.058 145.361L718.463 147.079C708.987 150.622 700.114 159.303 692.011 172.005C683.963 184.622 677.028 200.651 671.196 217.977C659.535 252.615 652.535 291.665 649.679 317.015L649.129 321.889L639.381 320.791L639.93 315.916C642.841 290.083 649.957 250.316 661.898 214.846C667.866 197.117 675.103 180.269 683.741 166.729C692.323 153.275 702.648 142.52 715.027 137.89L719.621 136.172L723.058 145.361Z";

const MemberCard = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] flex-shrink-0 cursor-pointer mx-4 group"
      style={{ perspective: "1500px" }} // 3D効果の奥行き
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* 影 (背面に固定)
          回転時（isFlipped が true）は opacity-0 にして影をスッと消すことで自然に見せます */}
      <div
        className={`absolute top-[15px] left-[15px] w-full h-full z-0 pointer-events-none transition-all duration-300 ${
          isFlipped
            ? "opacity-0" // 回転中は影を消す
            : "opacity-100 group-hover:translate-x-[5px] group-hover:translate-y-[5px]"
        }`}
      >
        <svg viewBox="0 0 958 939" className="w-full h-full">
          <path d={APPLE_STEM_PATH} fill="#4b6b25" />
          <path d={APPLE_BODY_PATH} fill="#4b6b25" />
        </svg>
      </div>

      {/* 回転する本体 */}
      <div
        className={`relative w-full h-full transition-transform duration-700 ease-in-out z-10 ${
          !isFlipped && "group-hover:translate-x-[5px] group-hover:translate-y-[5px]"
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* === 表面 (写真) === */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* 用意していただいた枝付きリンゴ画像を直接表示 */}
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-contain"
          />
        </div>

        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)", // 裏返しておく
          }}
        >
          <svg viewBox="0 0 958 939" className="w-full h-full">
            {/* 【修正箇所】SVGの描画順序を変更
              先に枝を描画し、その上から白い本体を描画することで枝を背面に回します 
            */}
            <path d={APPLE_STEM_PATH} fill="#3A2A2A" />
            <path d={APPLE_BODY_PATH} fill="#F5F5F5" />

            {/* テキスト領域 */}
            <foreignObject x="150" y="300" width="658" height="400">
              <div className="flex flex-col items-center justify-center w-full h-full text-center p-4">
                <p className="text-[#FF4B4B] font-bold text-3xl md:text-4xl mb-6">
                  {member.role}
                </p>
                <p className="text-black font-black text-5xl md:text-6xl tracking-widest">
                  {member.name}
                </p>
              </div>
            </foreignObject>
          </svg>
        </div>
      </div>
    </div>
  );
};

const MembersSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useRef(null);

  // メンバーデータ (画像をすべてダミー画像に差し替え)
  const members = [
    {
      id: 1,
      role: "チーフ",
      name: "磯田陽太",
      image: "src/assets/harutaApple.png",
    },
    {
      id: 2,
      role: "サブチーフ",
      name: "叶竣太",
      image: "src/assets/harutaApple.png",
    },
    {
      id: 3,
      role: "エンジニア",
      name: "山田太郎",
      image: "src/assets/harutaApple.png",
    },
    {
      id: 4,
      role: "デザイナー",
      name: "佐藤花子",
      image: "src/assets/harutaApple.png",
    },
    {
      id: 5,
      role: "広報プランナー",
      name: "鈴木一郎",
      image: "src/assets/harutaApple.png",
    },
  ];

  // 横スクロール時にプログレスバーを更新
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll > 0) {
        setScrollProgress(scrollLeft / maxScroll);
      }
    }
  };

  // スクロールバーのつまみを動かした時にコンテナをスクロール
  const handleRangeChange = (e) => {
    const value = parseFloat(e.target.value);
    setScrollProgress(value);
    if (scrollRef.current) {
      const { scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      scrollRef.current.scrollLeft = maxScroll * value;
    }
  };

  return (
    <section
      id="members"
      className="bg-[#8CC63F] py-24 relative overflow-hidden w-full mb-40 px-6 md:px-0"
    >
      {/* SectionTitleは既存のコンポーネントを使用 */}
      <SectionTitle enTitle="MEMBER" jaTitle="メンバー紹介" />

      {/* 横スクロールするメンバーリスト */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto w-full px-0 md:px-20 pb-10 pt-10"
        style={{
          scrollbarWidth: "none", // Firefox用のスクロールバー非表示
          msOverflowStyle: "none", // IE用のスクロールバー非表示
        }}
      >
        {/* Chrome/Safari用のスクロールバー非表示スタイル */}
        <style>{`
          #members div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {members.map((member, index) => (
          <MemberCard key={member.id} member={member} index={index} />
        ))}
      </div>

      {/* カスタムスクロールバー (リンゴスライダー) */}
      <div className="relative w-64 md:w-96 h-3 bg-white/70 rounded-full mx-auto mt-10 flex items-center shadow-inner">
        {/* 実際に操作する透明なレンジインプット */}
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={scrollProgress}
          onChange={handleRangeChange}
          className="absolute w-full h-full opacity-0 cursor-pointer z-20"
        />

        {/* 白いバー (進行度) */}
        <div
          className="absolute left-0 h-full bg-[#FF4B4B] rounded-full pointer-events-none"
          style={{ width: `${scrollProgress * 100}%` }}
        ></div>

        {/* つまみ (赤いリンゴ) */}
        <div
          className="absolute top-1/2 -translate-y-1/2 pointer-events-none z-10 w-10 h-10 flex items-center justify-center transition-all duration-75"
          style={{ left: `calc(${scrollProgress * 100}% - 20px)` }}
        >
          {/* 影 */}
          <svg
            viewBox="0 0 958 939"
            className="absolute top-[2px] left-[2px] w-full h-full z-0 opacity-50"
          >
            <path d={APPLE_BODY_PATH} fill="#4b6b25" />
          </svg>
          <svg viewBox="0 0 958 939" className="relative w-full h-full z-10">
            <path d={APPLE_BODY_PATH} fill="#FF4B4B" />
            <path d={APPLE_STEM_PATH} fill="#3A2A2A" />
          </svg>
        </div>
      </div>
    </section>
  );
};

// --- 応募フォーム (ENTRY) セクション ---
const EntrySection = () => {
  // ページトップへ戻る関数
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="entry"
      // 上部を丸め、上のセクションに少し被せるデザイン
      className="bg-[#FF4B4B] text-white pt-24 pb-16 px-6 md:px-12 lg:px-20 rounded-t-[40px] md:rounded-t-[80px] w-full relative -mt-10 z-30"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-10 lg:gap-12 xl:gap-20">
        {/* 左側: タイトル */}
        <div className="flex flex-col items-center lg:items-start justify-center shrink-0">
          <h2 className="font-bebas text-[100px] md:text-[140px] leading-none text-white tracking-wider">
            ENTRY
          </h2>
          <p className="text-2xl md:text-3xl font-bold mt-2 tracking-widest">
            応募フォーム
          </p>
        </div>

        {/* 中央: 区切り線 (PCのみ) */}
        <div className="hidden lg:block w-[3px] bg-white rounded-full "></div>
        {/* 中央: 区切り線 (SPのみ) */}
        <div className="block lg:hidden w-[90%] h-[3px] bg-white rounded-full my-4"></div>

        {/* 右側: 募集要項とボタン */}
        <div className="flex flex-col xl:flex-row items-center lg:items-start xl:items-center justify-between gap-10 w-full">
          {/* 募集要項テキスト */}
          <ul className="px-6 md:px-0 space-y-5 text-left font-bold text-lg md:text-xl leading-relaxed">
            <li>・誰でも大歓迎！</li>
            <li>
              ・正式な班分けについてはPJ配属後、面談で
              <br className="hidden md:block" />
              決定します。フォームでは希望を答えて下さい。
            </li>
            <li>
              ・参考になる制作物がある場合は添付してくだ
              <br className="hidden md:block" />
              さい。なくても大丈夫です。
            </li>
            <li>・志望者数が多すぎる場合は、選考があります。</li>
          </ul>

          {/* ボタン */}
          <a
            href="#" // ※実際の応募フォームのURLを設定してください
            className="relative flex items-center bg-white text-[#FF4B4B] rounded-full pl-8 pr-16 py-4 md:py-5 font-bold text-xl md:text-2xl hover:scale-105 transition-transform duration-300 shrink-0 mt-4 xl:mt-0"
          >
            <span>フォームはコチラ</span>

            {/* リンゴアイコン (ボタン右端に被せる) */}
            <div className="absolute right-[-24px] md:right-[-32px] top-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 drop-shadow-[5px_5px_0px_#B22222]">
              <svg viewBox="0 0 958 939" className="w-full h-full">
                {/* 茎 */}
                <path
                  d="M723.058 145.361L718.463 147.079C708.987 150.622 700.114 159.303 692.011 172.005C683.963 184.622 677.028 200.651 671.196 217.977C659.535 252.615 652.535 291.665 649.679 317.015L649.129 321.889L639.381 320.791L639.93 315.916C642.841 290.083 649.957 250.316 661.898 214.846C667.866 197.117 675.103 180.269 683.741 166.729C692.323 153.275 702.648 142.52 715.027 137.89L719.621 136.172L723.058 145.361Z"
                  fill="#5A4444"
                />
                {/* リンゴ本体 */}
                <path
                  d="M544.598 814.17C508.963 821.004 472.267 822.399 435.83 817.987C390.73 812.526 370.904 754.743 329.099 730.792C287.294 706.842 227.419 718.965 199.897 682.821C177.662 653.619 160.305 621.258 148.178 587.06L148.782 587.407C114.846 493.513 120.84 385.871 174.359 292.453C245.798 167.758 381.925 103.292 516.221 117.121C563.69 122.009 578.525 193.245 622.599 218.495C729.17 279.55 735.628 220.512 763.854 258.99C843.707 367.848 856.945 517.885 785.507 642.581C731.988 735.999 642.161 795.613 543.998 813.826L544.598 814.17Z"
                  fill="#8CC63F"
                />
                {/* 右矢印 (白) */}
                <path
                  d="M380 500 h200 m-70 -70 l70 70 l-70 70"
                  stroke="#FFFFFF"
                  strokeWidth="50"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>

      {/* PAGE TOP ボタン */}
      <div className="mt-24 flex justify-center">
        <button
          onClick={scrollToTop}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <span className="font-bebas text-3xl md:text-4xl tracking-widest mt-1">
            PAGE TOP
          </span>
          <div className="w-12 h-12 md:w-14 md:h-14">
            <svg viewBox="0 0 958 939" className="w-full h-full">
              {/* 白いリンゴ本体 (PAGE TOPのアイコン) */}
              <path
                d="M723.058 145.361L718.463 147.079C708.987 150.622 700.114 159.303 692.011 172.005C683.963 184.622 677.028 200.651 671.196 217.977C659.535 252.615 652.535 291.665 649.679 317.015L649.129 321.889L639.381 320.791L639.93 315.916C642.841 290.083 649.957 250.316 661.898 214.846C667.866 197.117 675.103 180.269 683.741 166.729C692.323 153.275 702.648 142.52 715.027 137.89L719.621 136.172L723.058 145.361ZM544.598 814.17C508.963 821.004 472.267 822.399 435.83 817.987C390.73 812.526 370.904 754.743 329.099 730.792C287.294 706.842 227.419 718.965 199.897 682.821C177.662 653.619 160.305 621.258 148.178 587.06L148.782 587.407C114.846 493.513 120.84 385.871 174.359 292.453C245.798 167.758 381.925 103.292 516.221 117.121C563.69 122.009 578.525 193.245 622.599 218.495C729.17 279.55 735.628 220.512 763.854 258.99C843.707 367.848 856.945 517.885 785.507 642.581C731.988 735.999 642.161 795.613 543.998 813.826L544.598 814.17Z"
                fill="#FFFFFF"
              />
              {/* 上矢印 (赤) */}
              <path
                d="M480 620 v-250 m-70 70 l70 -70 l70 70"
                stroke="#FF4B4B"
                strokeWidth="50"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
};
// --- メインコンポーネント ---

export default function AppPJLanding() {
  return (
    // 【重要】w-full, max-w-[100vw], overflow-x-hidden を追加し、全画面の横揺れを強制ブロック
    <div className="bg-[#8CC63F] min-h-screen w-full max-w-[100vw] overflow-x-hidden pt-4 text-black selection:bg-[#FF4B4B] selection:text-white relative">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.5); }
          60% { transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-scale-in {
          animation: scaleIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-pop-in {
          animation: popIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .opacity-0 { opacity: 0; }
      `}</style>
      <Navbar className="px-4" />

      <Hero />

      <ConceptSection />

      <RequirementSection />

      <RolesSection />

      <MembersSection />

      <EntrySection />
    </div>
  );
}