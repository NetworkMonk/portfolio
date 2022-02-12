
export default function Skill(props) {
  const { title, percent } = props;

  return (
    <div className="w-full flex my-3">
      <div className="flex-none w-32 bg-white rounded-l p-1 pl-3 fira-mono border-r border-violet-700 text-sm text-violet-900">
        {title}
      </div>
      <div className="flex-1">
        <div className="w-full bg-gray-200 h-full rounded-r">
          <div className="bg-violet-800 h-full" style={{width: percent + '%'}}></div>
        </div>
      </div>
    </div>
  )
}
