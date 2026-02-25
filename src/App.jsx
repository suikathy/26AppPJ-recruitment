import React from 'react';

// --- サブコンポーネント ---
const AppleLogo = ({ className }) => (
  <svg  className={className} viewBox="0 0 133 73" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M46.9932 23.0669C47.4137 19.3363 49.0511 11.5771 52.2371 10.3857" stroke="#8DC619" stroke-width="7" stroke-linecap="square"/>
<path d="M39.6983 59.3435C37.1008 59.8416 34.4256 59.9433 31.7696 59.6217C28.4822 59.2236 27.0368 55.0118 23.9896 53.2661C20.9424 51.5207 16.5785 52.404 14.5724 49.7699C12.9516 47.6414 11.6863 45.2824 10.8023 42.7898L10.8463 42.815C8.37263 35.9712 8.80905 28.1253 12.7102 21.3162C17.9175 12.2276 27.84 7.52875 37.629 8.53657C41.089 8.89284 42.1709 14.0847 45.3833 15.9253C53.1514 20.3753 53.6222 16.0731 55.6796 18.8772C61.5002 26.8117 62.4659 37.748 57.2587 46.8368C53.3576 53.6458 46.8095 57.9906 39.6542 59.3182L39.6983 59.3435Z" fill="#8DC619"/>
<path d="M73.536 22.8005H78.9L83.004 48.0005H79.044L78.324 42.9965V43.0685H73.824L73.104 48.0005H69.432L73.536 22.8005ZM77.856 39.6485L76.092 27.1925H76.02L74.292 39.6485H77.856ZM84.9252 22.8005H90.7572C92.7252 22.8005 94.2012 23.3285 95.1852 24.3845C96.1692 25.4405 96.6612 26.9885 96.6612 29.0285V31.5125C96.6612 33.5525 96.1692 35.1005 95.1852 36.1565C94.2012 37.2125 92.7252 37.7405 90.7572 37.7405H88.8852V48.0005H84.9252V22.8005ZM90.7572 34.1405C91.4052 34.1405 91.8852 33.9605 92.1972 33.6005C92.5332 33.2405 92.7012 32.6285 92.7012 31.7645V28.7765C92.7012 27.9125 92.5332 27.3005 92.1972 26.9405C91.8852 26.5805 91.4052 26.4005 90.7572 26.4005H88.8852V34.1405H90.7572ZM98.8119 22.8005H104.644C106.612 22.8005 108.088 23.3285 109.072 24.3845C110.056 25.4405 110.548 26.9885 110.548 29.0285V31.5125C110.548 33.5525 110.056 35.1005 109.072 36.1565C108.088 37.2125 106.612 37.7405 104.644 37.7405H102.772V48.0005H98.8119V22.8005ZM104.644 34.1405C105.292 34.1405 105.772 33.9605 106.084 33.6005C106.42 33.2405 106.588 32.6285 106.588 31.7645V28.7765C106.588 27.9125 106.42 27.3005 106.084 26.9405C105.772 26.5805 105.292 26.4005 104.644 26.4005H102.772V34.1405H104.644ZM112.699 22.8005H118.531C120.499 22.8005 121.975 23.3285 122.959 24.3845C123.943 25.4405 124.435 26.9885 124.435 29.0285V31.5125C124.435 33.5525 123.943 35.1005 122.959 36.1565C121.975 37.2125 120.499 37.7405 118.531 37.7405H116.659V48.0005H112.699V22.8005ZM118.531 34.1405C119.179 34.1405 119.659 33.9605 119.971 33.6005C120.307 33.2405 120.475 32.6285 120.475 31.7645V28.7765C120.475 27.9125 120.307 27.3005 119.971 26.9405C119.659 26.5805 119.179 26.4005 118.531 26.4005H116.659V34.1405H118.531ZM125.482 48.1445C124.762 48.1445 124.15 48.0965 123.646 48.0005V44.4005C124.03 44.4965 124.462 44.5445 124.942 44.5445C125.734 44.5445 126.322 44.3525 126.706 43.9685C127.09 43.5605 127.282 42.9485 127.282 42.1325V22.8005H131.242V42.0245C131.242 44.0885 130.762 45.6245 129.802 46.6325C128.866 47.6405 127.426 48.1445 125.482 48.1445Z" fill="#8DC619"/>
</svg>
);
// ナビゲーション
// ナビゲーション
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
 <a href="#features" className="hover:text-[#8CC63F] transition-colors">機能</a>
<a href="#jobs" className="hover:text-[#8CC63F] transition-colors">仕事内容</a>
<a href="#members" className="hover:text-[#8CC63F] transition-colors">メンバー</a>
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
      <path d="M723.058 145.361L718.463 147.079C708.987 150.622 700.114 159.303 692.011 172.005C683.963 184.622 677.028 200.651 671.196 217.977C659.535 252.615 652.535 291.665 649.679 317.015L649.129 321.889L639.381 320.791L639.93 315.916C642.841 290.083 649.957 250.316 661.898 214.846C667.866 197.117 675.103 180.269 683.741 166.729C692.323 153.275 702.648 142.52 715.027 137.89L719.621 136.172L723.058 145.361Z" fill={strokeColor || "#5A4444"}/>
      <path d="M544.598 814.17C508.963 821.004 472.267 822.399 435.83 817.987C390.73 812.526 370.904 754.743 329.099 730.792C287.294 706.842 227.419 718.965 199.897 682.821C177.662 653.619 160.305 621.258 148.178 587.06L148.782 587.407C114.846 493.513 120.84 385.871 174.359 292.453C245.798 167.758 381.925 103.292 516.221 117.121C563.69 122.009 578.525 193.245 622.599 218.495C729.17 279.55 735.628 220.512 763.854 258.99C843.707 367.848 856.945 517.885 785.507 642.581C731.988 735.999 642.161 795.613 543.998 813.826L544.598 814.17Z" fill={fillColor}/>
    </>
  );

  return (
    <div className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
      {/* 影の部分 (右下に15pxずらす) */}
      <svg viewBox="0 0 958 939" className="absolute top-[50px] left-[60px] w-full h-full opacity-100">
        {applePaths("#4b6b25", "#4b6b25")}
      </svg>
      {/* 白いリンゴ本体 */}
      <svg viewBox="0 0 958 939" className="relative w-full h-full">
        {applePaths("#F5F5F5", "#5A4444")}
      </svg>
    </div>
  );
};

// スクロールインジケーター（修正版）
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
        style={{ writingMode: 'vertical-rl' }}
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
            <h1 className="text-7xl md:text-[144px] font-black text-black leading-[1.1] ">
              AppPJ<br />メンバー<br />募集。
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
// 機能紹介セクション
const FeatureItem = ({ number, title, description, image, reverse }) => (
  <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 mb-20`}>
    <div className="w-full md:w-1/2 flex justify-center">
      {/* スマホモックアップ画像のプレースホルダ */}
      <div className="w-48 h-[400px] bg-gray-200 rounded-[3rem] border-8 border-gray-800 shadow-xl overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
    </div>
    <div className="w-full md:w-1/2">
      <div className="text-5xl font-black text-white mb-2">{number}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-sm leading-relaxed whitespace-pre-wrap">{description}</p>
    </div>
  </div>
);

// チーム紹介セクション
const TeamCard = ({ title, isActive }) => (
  <div className={`p-4 rounded-2xl border-2 border-white text-center cursor-pointer transition-all ${isActive ? 'bg-white text-[#8CC63F]' : 'text-white'}`}>
    <span className="font-bold">{title}</span>
  </div>
);

// --- メインコンポーネント ---

export default function AppPJLanding() {
  return (
    <div className="bg-[#8CC63F] min-h-screen  pt-4 px-4 text-black font-sans selection:bg-[#FF4B4B] selection:text-white">
      <Navbar />
      
      <Hero />

      {/* コンセプトセクション */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-black mb-8 italic">できたら、やばい。</h2>
        <div className="space-y-6 text-sm md:text-base font-medium leading-loose">
          <p>学園祭最大のアプリを作りたい。<br />当日、みんなが使いこなす姿を、<br />それ、絶対やばいじゃんか。</p>
          <p>現役大学生のプロジェクト。<br />未経験、そんな不安は誰にだってあるはず。<br />分からないならプロから<br />教わっちゃえばいいし、自分で学べばいい。<br />大切なのは、その「ワクワク」の純度。</p>
        </div>
      </section>

      {/* 機能（REQUIREMENT）セクション */}
      <section className="bg-[#8CC63F] px-6 py-20 relative">
        <h2 className="text-5xl font-black text-white opacity-50 mb-16">REQUIREMENT<br />機能</h2>
        <div className="max-w-5xl mx-auto">
          <FeatureItem 
            number="01" 
            title="区画図付き企画検索" 
            description="学園祭は広い！今どこに何があるかを、スマホの中で自由に！" 
            image="https://via.placeholder.com/200x400"
          />
          <FeatureItem 
            number="02" 
            title="タイムテーブル" 
            description="見たいステージを逃さない！" 
            image="https://via.placeholder.com/200x400"
            reverse
          />
        </div>
      </section>

      {/* チーム（FOUR TEAMS）セクション */}
      <section className="bg-[#8CC63F] px-6 py-20">
        <h2 className="text-5xl font-black text-white opacity-50 mb-10">FOUR TEAMS<br />仕事内容？</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-4 mb-10">
            <TeamCard title="エンジニア" isActive={true} />
            <TeamCard title="デザイナー" />
            <TeamCard title="アプリ広報プランナー" />
            <TeamCard title="アプリ体験デザイナー" />
          </div>
          
          <div className="bg-white/90 p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#8CC63F] mb-4">エンジニア</h3>
            <p className="text-sm leading-relaxed">
              フロントエンド・バックエンドともにコードやサービスを使って完結しております。
              今年は、Flutterというフレームワーク、言語を借りる予定だよ。
            </p>
          </div>
        </div>
      </section>

      {/* エントリー（ENTRY）セクション */}
      <footer className="bg-[#FF4B4B] text-white py-20 px-6 text-center">
        <h2 className="text-5xl font-black mb-10">ENTRY<br /><span className="text-xl">応募フォーム</span></h2>
        <div className="max-w-xl mx-auto bg-white/10 p-6 rounded-xl mb-10 text-left text-sm">
          <ul className="list-disc list-inside space-y-2">
            <li>募集締切は、こちらのサイトの通り。</li>
            <li>結果発表は、4月上旬を予定しています。</li>
            <li>募集に関する詳細は、HPをご確認ください！</li>
          </ul>
        </div>
        <button className="bg-white text-[#FF4B4B] px-12 py-4 rounded-full text-xl font-bold shadow-xl hover:scale-105 transition-transform">
          エントリーする
        </button>
      </footer>
    </div>
  );
}