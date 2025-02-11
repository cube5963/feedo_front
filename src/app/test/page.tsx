import FormCheck from '../_components/form/check';
import FormRadio from '../_components/form/radio';
import FormSlider from '../_components/form/slider';
import FormStar from '../_components/form/star';
import FormText from '../_components/form/text';
import FromTwoChoice from '../_components/form/two_choice';

export default function Home() {
    return (
        <div>
            <FormRadio title="一番好きなのは？" options={["犬", "猫", "鳥", "魚", "爬虫類"]} />
            <FormCheck title="好きな動物をすべて選択してください！" options={["犬", "猫", "鳥", "魚", "爬虫類"]} />
            <FormSlider title="緊張度合いを0~5で教えてください" max={5} min={0} step={1} />
            <FormStar title="このアプリの評価をお願いします！" max={5} />
            <FromTwoChoice title="猫は好きですか？" />
            <FormText title="なぜそれを選択したのか記入してください" />
        </div>
    );
}