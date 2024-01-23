export function InteractiveAvatar() {
    return (
        <div className="interactive-avatar flex space-between align-center">
            <img className="avatar" src="../public/img/avatar.png" alt="" />

            <div className="work-status flex space-between align-center">
                <div className="dash"></div>
                <p className="font-Gilmer-Medium">Available For Work</p>
            </div>
        </div>
    )
}
