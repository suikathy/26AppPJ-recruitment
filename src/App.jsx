import React, { useState, useRef } from "react";

// --- サブコンポーネント ---
const AppleLogo = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 133 73"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M46.9932 23.0669C47.4137 19.3363 49.0511 11.5771 52.2371 10.3857"
      stroke="#8DC619"
      stroke-width="7"
      stroke-linecap="square"
    />
    <path
      d="M39.6983 59.3435C37.1008 59.8416 34.4256 59.9433 31.7696 59.6217C28.4822 59.2236 27.0368 55.0118 23.9896 53.2661C20.9424 51.5207 16.5785 52.404 14.5724 49.7699C12.9516 47.6414 11.6863 45.2824 10.8023 42.7898L10.8463 42.815C8.37263 35.9712 8.80905 28.1253 12.7102 21.3162C17.9175 12.2276 27.84 7.52875 37.629 8.53657C41.089 8.89284 42.1709 14.0847 45.3833 15.9253C53.1514 20.3753 53.6222 16.0731 55.6796 18.8772C61.5002 26.8117 62.4659 37.748 57.2587 46.8368C53.3576 53.6458 46.8095 57.9906 39.6542 59.3182L39.6983 59.3435Z"
      fill="#8DC619"
    />
    <path
      d="M73.536 22.8005H78.9L83.004 48.0005H79.044L78.324 42.9965V43.0685H73.824L73.104 48.0005H69.432L73.536 22.8005ZM77.856 39.6485L76.092 27.1925H76.02L74.292 39.6485H77.856ZM84.9252 22.8005H90.7572C92.7252 22.8005 94.2012 23.3285 95.1852 24.3845C96.1692 25.4405 96.6612 26.9885 96.6612 29.0285V31.5125C96.6612 33.5525 96.1692 35.1005 95.1852 36.1565C94.2012 37.2125 92.7252 37.7405 90.7572 37.7405H88.8852V48.0005H84.9252V22.8005ZM90.7572 34.1405C91.4052 34.1405 91.8852 33.9605 92.1972 33.6005C92.5332 33.2405 92.7012 32.6285 92.7012 31.7645V28.7765C92.7012 27.9125 92.5332 27.3005 92.1972 26.9405C91.8852 26.5805 91.4052 26.4005 90.7572 26.4005H88.8852V34.1405H90.7572ZM98.8119 22.8005H104.644C106.612 22.8005 108.088 23.3285 109.072 24.3845C110.056 25.4405 110.548 26.9885 110.548 29.0285V31.5125C110.548 33.5525 110.056 35.1005 109.072 36.1565C108.088 37.2125 106.612 37.7405 104.644 37.7405H102.772V48.0005H98.8119V22.8005ZM104.644 34.1405C105.292 34.1405 105.772 33.9605 106.084 33.6005C106.42 33.2405 106.588 32.6285 106.588 31.7645V28.7765C106.588 27.9125 106.42 27.3005 106.084 26.9405C105.772 26.5805 105.292 26.4005 104.644 26.4005H102.772V34.1405H104.644ZM112.699 22.8005H118.531C120.499 22.8005 121.975 23.3285 122.959 24.3845C123.943 25.4405 124.435 26.9885 124.435 29.0285V31.5125C124.435 33.5525 123.943 35.1005 122.959 36.1565C121.975 37.2125 120.499 37.7405 118.531 37.7405H116.659V48.0005H112.699V22.8005ZM118.531 34.1405C119.179 34.1405 119.659 33.9605 119.971 33.6005C120.307 33.2405 120.475 32.6285 120.475 31.7645V28.7765C120.475 27.9125 120.307 27.3005 119.971 26.9405C119.659 26.5805 119.179 26.4005 118.531 26.4005H116.659V34.1405H118.531ZM125.482 48.1445C124.762 48.1445 124.15 48.0965 123.646 48.0005V44.4005C124.03 44.4965 124.462 44.5445 124.942 44.5445C125.734 44.5445 126.322 44.3525 126.706 43.9685C127.09 43.5605 127.282 42.9485 127.282 42.1325V22.8005H131.242V42.0245C131.242 44.0885 130.762 45.6245 129.802 46.6325C128.866 47.6405 127.426 48.1445 125.482 48.1445Z"
      fill="#8DC619"
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

const Navbar = () => {
  return (
    <div className="w-full max-w-[1440px] m-[0_auto] relative">
      {/* メインのナビゲーションバー */}
      {/* shadow-sm を削除し、カスタムシャドウを追加 */}
      <div className="bg-[#f5f5f5] rounded-full py-1 px-6 md:px-5 mx-4  relative z-10 flex justify-between items-center shadow-[10px_10px_0px_0px_#4b6b25]">
        {/* 左側のロゴ部分 */}

        <AppleLogo className="w-auto h-12 text-[#8CC63F]" />

        {/* 右側のナビゲーションとボタン */}
        <div className="flex items-center space-x-6 md:space-x-10 font-bold text-black">
          <a
            href="#features"
            className="hover:text-[#8CC63F] transition-colors"
          >
            機能
          </a>
          <a href="#jobs" className="hover:text-[#8CC63F] transition-colors">
            仕事内容
          </a>
          <a href="#members" className="hover:text-[#8CC63F] transition-colors">
            メンバー
          </a>
          <a
            href="#entry"
            className="bg-[#FF4B4B] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all shadow-md transform hover:-translate-y-0.5"
          >
            応募フォーム
          </a>
        </div>
      </div>
    </div>
  );
};

const BigAppleSVG = () => {
  // お手持ちのパスデータ
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
    <div className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
      {/* 影の部分 (右下に15pxずらす) */}
      <svg
        viewBox="0 0 958 939"
        className="absolute top-[50px] left-[60px] w-full h-full opacity-100"
      >
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
    <div className="ml-2 h-full relative overflow-hidden w-10">
      {/* 動く文字 */}
      <div
        className="absolute right-0 font-bold text-white text-[20px] whitespace-nowrap animate-scroll-vertical origin-top-left"
        style={{ writingMode: "vertical-rl" }}
      >
        SCROLL!!
      </div>
    </div>
  </div>
);

const Hero = () => {
  return (
    // Heroセクション全体を相対配置の基準とする
    <section className="bg-[#8CC63F] min-h-screen w-full h-full relative overflow-hidden">
      {/* --- グループ1：画面中央に固定する要素 --- */}
      {/* Flexboxを使って、このコンテナ自体を画面の中央に配置 */}
      <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 pointer-events-none">
        {/* リンゴを基準とする相対配置コンテナ */}
        <div className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px] flex items-center justify-center pointer-events-auto">
          {/* 中央のリンゴ */}
          <div className="z-10">
            <BigAppleSVG />
          </div>

          {/* キャッチコピー（リンゴ基準で配置） */}
          <div className="absolute top-[15%] left-[-15%] md:left-[-100px] z-20 pointer-events-none">
            <h1 className="text-9xl md:text-[144px] font-black font-bold text-black leading-[1.1] ">
              AppPJ
              <br />
              メンバー
              <br />
              募集。
            </h1>
            <p className="text-xl md:text-2xl font-bold text-black mt-6 ml-2">
              できたら、やばい。
            </p>
          </div>

          {/* 期限バッジ（リンゴ基準で配置） */}
          <div className="absolute bottom-[10%] right-[5%] md:right-[-5%] z-30 pointer-events-none">
            <div className="bg-[#FF4B4B] text-white w-32 h-32 md:w-40 md:h-40 rounded-full flex flex-col items-center justify-center font-bold ">
              <span className="text-lg md:text-2xl">2月28日</span>
              <span className="text-lg md:text-2xl">まで！</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- グループ2：画面右端に固定する要素 --- */}
      {/* Heroセクションの右下に絶対配置 */}
      <div className="absolute bottom-[12%] right-0 z-40">
        <ScrollIndicator />
      </div>
    </section>
  );
};
const ConceptSection = () => {
  return (
    <section className="px-20  relative bg-[#8CC63F] overflow-hidden py-24 ">
      {/* --- コンテンツ (テキストとリンゴ) --- */}
      <div className=" z-10 max-w-7xl mx-auto ">
        <div className="">
          {/* --- 左側：テキストコンテンツ (幅を広めに取る) --- */}
          <div>
            <h2 className="text-7xl md:text-[10vw] font-black leading-[1.1] font-bold text-[#f5f5f5] mb-12 tracking-tighter">
              できたら、
              <br />
              やばい。
            </h2>

            <div className="space-y-10 text-xl md:text-2xl font-bold leading-loose text-black">
              <p>
                早稲田祭初のアプリを作る。
                <br />
                僕は、なんでそんなことするのか。
                <br />
                ただ、見てみたくなったから。
              </p>
              <p>
                僕たちが作ったアプリで
                <br />
                来場者・さんさんが企画を楽しんでる瞬間。
                <br />
                隈ステのバックスクリーンで広報されてる瞬間。
                <br />
                早稲田を、日本を、世界を震わせる瞬間。
              </p>
              <p>
                能力だって、調整だって、
                <br />
                アプリの意義だって、全部後付け。
              </p>
              <p>
                できたら、やばい。できたら、やばい。
                <br />
                本当にできてしまったら、やばい。
                <br />
                をともに実現しよう。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" absolute top-0 right-0 h-[90%] z-0 ">
        <img
          src="../src/assets/tree.png"
          alt=""
          className="max-h-full relative " // 透明度とブレンドモードで調整
          style={{ objectPosition: "right center" }} // 画像の右側を基準に表示
        />

        <AppleShape className="absolute bottom-20 w-20 h-auto fill-[#f5f5f5]" />
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
    className={`relative z-10  max-w-7xl mx-auto mb-32 md:mb-20 ${className}`}
  >
    {/* 背面の英語タイトル (Bebas Neue) */}
    <h2 className="absolute -top-10 md:-top-20 left-0 font-bebas text-[80px] md:text-[220px] text-white leading-none tracking-wider pointer-events-none">
      {enTitle}
    </h2>
    {/* 前面の日本語タイトル */}
    <h2 className="relative z-10 text-6xl md:text-8xl font-black text-black pt-5 md:pt-10">
      {jaTitle}
    </h2>
  </div>
);

const RequirementTitle = ({ number, detailTitle, className = "" }) => (
  // classNameを追加で受け取れるようにしておくと、特定の場所だけ余白を変えたい時などに便利です
  <div className={`relative z-10  max-w-7xl mx-auto mb-20 ${className}`}>
    <h2 className="absolute -top-10 md:-top-20 left-0 font-bebas text-[80px] md:text-[220px] text-white leading-none tracking-wider pointer-events-none">
      {number}
    </h2>

    <h2 className="relative z-10 text-3xl md:text-5xl font-black text-black pt-5 md:pt-10">
      {detailTitle}
    </h2>
  </div>
);

const WindingDottedLine = () => (
  // 修正：赤線をずっと下（top-[100px]~）にずらし、デザイン通りAppleや画像を通過するように。
  <div className="absolute top-[80px] md:top-100 left-0 w-full h-[120%] pointer-events-none z-0 overflow-hidden">
    <svg
      width="1440"
      height="2007"
      viewBox="0 0 1440 2007"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1000px] md:w-[1440px] h-auto opacity-100 z-0"
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
      <section className="px-20   bg-[#8CC63F] overflow-hidden py-24   w-full space-y-40 relative">
        <WindingDottedLine />
        <SectionTitle
          className="relative z-20"
          enTitle="REQUIREMENT"
          jaTitle="機能"
        />
        <div className="flex items-center justify-between w-full relative z-20">
          <div>
            {/* <RequirementTitle number="01" detailTitle="地図機能付き企画検索" /> */}
            <h1 className="font-bebas text-9xl text-white relative">
              01
              <h2 className="absolute bottom-5 text-5xl text-black font-bold">
                地図機能付き企画検索
              </h2>
            </h1>

            <p className="text-2xl font-medium leading-[2]">
              早稲田祭の「場所」と「企画」を直感的に繋ぐ、アプリの中核機能！！
              <br />
              早稲田・戸山の全範囲、全企画を網羅予定。
              <br />
              これがあれば早稲田祭でもう迷わない！
              <br />
              飲食屋台に特化した特別な機能も!?
            </p>
          </div>

          <img src="src/assets/appimage1.png" />
        </div>

        <div className="flex md:flex-row-reverse items-center justify-between w-full relative z-20">
          <div className="md:self-start w-[450px] ">
            <h1 className="font-bebas text-9xl text-white relative text-right">
              02
              <h2 className="absolute bottom-5 text-5xl text-black font-bold md:right-0">
                タイムテーブル
              </h2>
            </h1>
            <p className="text-2xl font-medium leading-[2] md:text-right">
              時系列で企画を把握！
              <br />
              当日の動きを最適化し、
              <br />
              もっと早稲田祭を楽しもう。
            </p>
          </div>

          <img src="src/assets/appimage2.png" alt="アプリ画面" />

          <div className="w-[450px] md:self-end">
            <h1 className="font-bebas text-9xl text-white relative ">
              03
              <h2 className="absolute bottom-5 text-5xl text-black font-bold">
                マイタイムテーブル
              </h2>
            </h1>
            <p className="text-2xl font-medium leading-[2]">
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

        <div className="flex items-center justify-between w-full relative z-20">
          <img src="src/assets/appimage3.png" className="ml-20" />
          <div>
            <h1 className="font-bebas text-9xl text-white relative text-right">
              04
              <h2 className="absolute bottom-5 text-5xl text-black font-bold right-0">
                グッズ情報
              </h2>
            </h1>

            <p className="text-2xl font-medium leading-[2] text-right">
              早稲田祭の「場所」と「企画」を直感的に繋ぐ、アプリの中核機能！！
              <br />
              早稲田・戸山の全範囲、全企画を網羅予定。
              <br />
              これがあれば早稲田祭でもう迷わない！
              <br />
              飲食屋台に特化した特別な機能も!?
            </p>
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
      className="px-6 md:px-20 mb-30 bg-[#8CC63F] py-24 relative w-full"
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
                    className="bg-[#F5F5F5] rounded-[40px] px-8 py-8 md:px-12 md:py-10 flex items-center justify-between shadow-[10px_10px_0px_0px_#4b6b25] hover:translate-x-[10px] hover:translate-y-[10px] hover:shadow-none transition-all duration-200 w-full text-left"
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

// --- 個別のメンバーカードコンポーネント ---
const MemberCard = ({ member, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const clipId = `member-clip-${index}`; // SVG内で一意のIDを使用

  return (
    <div
      className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] flex-shrink-0 cursor-pointer mx-4 group"
      style={{ perspective: "1500px" }} // 3D効果の奥行き
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* 影 (背面に固定、ホバー時に少しずらして押し込み感を出す) */}
      <svg
        viewBox="0 0 958 939"
        className="absolute top-[15px] left-[15px] w-full h-full opacity-100 z-0 pointer-events-none transition-transform duration-300 group-hover:translate-x-[5px] group-hover:translate-y-[5px]"
      >
        <path d={APPLE_BODY_PATH} fill="#4b6b25" />
        <path d={APPLE_STEM_PATH} fill="#4b6b25" />
      </svg>

      {/* 回転する本体 */}
      <div
        className="relative w-full h-full transition-transform duration-700 ease-in-out z-10 group-hover:translate-x-[5px] group-hover:translate-y-[5px]"
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
          <svg viewBox="0 0 958 939" className="w-full h-full">
            <defs>
              <clipPath id={clipId}>
                <path d={APPLE_BODY_PATH} />
              </clipPath>
            </defs>
            {/* リンゴ型に切り抜いた画像 */}
            <image
              href={member.image}
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              clipPath={`url(#${clipId})`}
            />
            {/* 茎 */}
            <path d={APPLE_STEM_PATH} fill="#3A2A2A" />
          </svg>
        </div>

        {/* === 裏面 (役職と名前) === */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)", // 裏返しておく
          }}
        >
          <svg viewBox="0 0 958 939" className="w-full h-full">
            {/* 白いリンゴのベース */}
            <path d={APPLE_BODY_PATH} fill="#F5F5F5" />
            <path d={APPLE_STEM_PATH} fill="#3A2A2A" />

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

// --- MembersSection メインコンポーネント ---
const MembersSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useRef(null);

  // メンバーデータ (適宜画像パスなどを修正してください)
  const members = [
    {
      id: 1,
      role: "チーフ",
      name: "磯田陽太",
      image: "src/assets/piguret.jpg",
    },
    {
      id: 2,
      role: "サブチーフ",
      name: "磯田陽太",
      image: "src/assets/member2.jpg",
    },
    {
      id: 3,
      role: "エンジニア",
      name: "山田太郎",
      image: "src/assets/member1.jpg",
    },
    {
      id: 4,
      role: "デザイナー",
      name: "佐藤花子",
      image: "src/assets/member2.jpg",
    },
    {
      id: 5,
      role: "広報プランナー",
      name: "鈴木一郎",
      image: "src/assets/member1.jpg",
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
      className="bg-[#8CC63F] py-24 relative overflow-hidden w-full"
    >
      {/* SectionTitleは既存のコンポーネントを使用 */}
      <SectionTitle enTitle="MEMBER" jaTitle="メンバー紹介" />

      {/* 横スクロールするメンバーリスト */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto w-full px-6 md:px-20 pb-10 pt-10"
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
          className="absolute left-0 h-full bg-white rounded-full pointer-events-none"
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
        <div className="hidden lg:block w-[3px] bg-white rounded-full my-6"></div>
        {/* 中央: 区切り線 (SPのみ) */}
        <div className="block lg:hidden w-24 h-[3px] bg-white rounded-full my-4"></div>

        {/* 右側: 募集要項とボタン */}
        <div className="flex flex-col xl:flex-row items-center lg:items-start xl:items-center justify-between gap-10 w-full">
          {/* 募集要項テキスト */}
          <ul className="space-y-5 text-left font-bold text-lg md:text-xl leading-relaxed">
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
    <div className="bg-[#8CC63F] min-h-screen   pt-4 text-black  selection:bg-[#FF4B4B] selection:text-white">
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
