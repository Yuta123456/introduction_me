import React from 'react';
class MusicContent extends React.Component {
    render() {
        return (
            <div className='container'>
                <section className="section">
                    <h1 className='title has-text-black'>About</h1>
                    <div>
                    色々な音楽を聴いてきたので、ここでは好きなアーティストについて述べます。めっちゃ有名じゃないやつ紹介してもしょうがないので、ある程度知名度があるものを紹介しようと思います。
                    
                    </div>
                </section>
                <section className="section">
                <h1 className="title has-text-primary">ELLEGARDEN</h1>
                <div class="container">
                    最近復活したロックバンド。俺の青春。ボーカルの声が少し高めなため、他のロックバンドよりもキャッチーに聞こえる。
                    ギターのフレーズも素晴らしく、イントロがかっこいい曲が多い。シンプルなフレーズであるにも関わらず、とても耳に残るようなフレーズを作る。天才。                    
                </div>
                </section>
                <section className="section">
                <h1 className="title has-text-primary">Vaundy</h1>
                    <div class="container">
                        最近来てるアーティスト。早めに乗っとかないとマジで損する。20歳とは思えない才能と作詞能力から、音楽界隈を騒がせている（？）まじでやばい。ビリーアイリッシュぐらいヤバイ。

                    
                    </div>
                </section>
                <section className="section">
                <h1 className="title has-text-primary">RADWIMPS</h1>
                    <div class="container">
                        やっぱいいよ。RADWIMPS。最近の音楽はちょっと難しくなってきてわかんなくなっちゃったけど、初期の方の音源を聞くと、思春期真っ只中に書いてるなあっていうシンプルな歌詞がとても心に刺さる、思い出補正なのかな？
                    </div>
                </section>
            </div>
        );
    }
}
export default MusicContent;