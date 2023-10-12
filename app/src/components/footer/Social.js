import './footer.css'

export default function Social({ item, onSetIsSocialExpand, activeSocial }) {
    const { id, icon, handles, link } = item;

    function handleClick() {
        onSetIsSocialExpand(id);
    }

    return (
        <li className={`social_link_li ${(activeSocial.id === id) ? "active" : "inactive"}`}>
        {handles ? <button className="social_link_button" onClick={handleClick}>{icon}</button> : 
        <a className="social_link_link social_link_button" href={link}>{icon}</a>}
    </li>
    )
}