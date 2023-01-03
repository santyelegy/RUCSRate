import announcements from '../sample_data/announcements.json'

function Announcement() {
    const content = announcements.map((announcement, index) => {
        return (
            <div>
                <h3>{announcement.title}</h3>
                <div>{announcement.content}</div>
            </div>
        );

    });
    return (
        <div>
            <h1>Announcement</h1>
            {content}
        </div>
    );
}

export default Announcement;