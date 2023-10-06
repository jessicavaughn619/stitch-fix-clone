export default function Social({ item, onSetIsSocialExpand }) {
    const { id, icon } = item;

    function handleClick() {
        onSetIsSocialExpand(id);
    }

    return (
        <li className="social_link_li">
        <button className="social_link_button" onClick={handleClick}>{icon}</button>
    </li>
    )
}