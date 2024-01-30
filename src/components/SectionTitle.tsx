import clsx from 'clsx';

type Props = {
    title: string;
    subTitle?: string;
};

export default function SectionTitle({ title, subTitle }: Props) {
    return (
        <div className="text-4xl font-semibold border-b-2 border-black py-6 sticky top-0 bg-white dark:bg-black dark:text-white dark:border-white">
            <h2
                className={clsx({
                    'mb-4': subTitle,
                })}
            >
                {title}
            </h2>

            {subTitle && (
                <p className="text-xl font-normal italic">{subTitle}</p>
            )}
        </div>
    );
}
