
import { useDroppable } from "@dnd-kit/core";
import { Task } from "./types";
import KanbanTask from "./KanbanTask";
import { Badge } from "@/components/ui/badge";

interface KanbanColumnProps {
  title: string;
  tasks: Task[];
  type: string;
}

const KanbanColumn = ({ title, tasks, type }: KanbanColumnProps) => {
  const { setNodeRef } = useDroppable({
    id: type,
  });

  const getBgColor = () => {
    switch (type) {
      case "todo": return "bg-gray-50";
      case "inProgress": return "bg-blue-50";
      case "review": return "bg-purple-50";
      case "done": return "bg-green-50";
      default: return "bg-gray-50";
    }
  };

  return (
    <div
      ref={setNodeRef}
      className={`${getBgColor()} p-4 rounded-lg shadow-sm border min-h-[500px] animate-fade-in`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <Badge variant="outline">{tasks.length}</Badge>
      </div>
      <div className="space-y-3">
        {tasks.map((task) => (
          <KanbanTask key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;
