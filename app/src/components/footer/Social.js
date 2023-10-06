export default function Social({ item, onSetIsSocialExpand }) {
    const { id, icon, handles, link } = item;

    function handleClick() {
        onSetIsSocialExpand(id);
    }

    return (
        <li className="social_link_li">
        {handles ? <button className="social_link_button" onClick={handleClick}>{icon}</button> : 
        <a className="social_link_link" href={link}>{icon}</a>}
    </li>
    )
}