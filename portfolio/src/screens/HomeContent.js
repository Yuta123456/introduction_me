import React from 'react';
class HomeContent extends React.Component {
    constructor(props) {
        super(props);
        this.cli = false;
    }
    //マウスカーソルもっていったら、動的に動くようにしたいよね
    render() {
        return (
            <div style={{backgroundColor: "#ffffff" }}>
                <p className="content">Profile</p>
                    <div class="container has-text-centered ">
                        <div class="is-size-3">年齢 : 20</div>
                        <div class="is-size-3">日本大学文理学部情報科学科</div>
                        <div class="is-size-3">日本大学文理学部情報科学科</div>
                        <div class="is-size-3">日本大学文理学部情報科学科</div>
                        <div class="is-size-3">日本大学文理学部情報科学科</div>
                    </div>
                <p className="content">Hobbies</p>
                    <div class="container has-text-centered ">
                        <div class="is-size-3">ギター</div>
                        <div class="is-size-3">ドラム</div>
                        <div class="is-size-3">音楽鑑賞</div>
                        <div class="is-size-3">競技プログラミング</div>
                        <div class="is-size-3">アニメ</div>
                        <div class="is-size-3">筋トレ</div>
                        <div class="is-size-3">ゲーム</div>
                    </div>
                <p className="content">Jobs</p>
                    <div class="container has-text-centered ">
                        <div class="is-size-3">2018~現在　株式会社東京個別指導学院　講師</div>
                        <div class="is-size-3">2020~現在　株式会社HI　アルバイト</div>
                    </div>

            </div>

        );
    }
}
export default HomeContent;