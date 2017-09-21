import Select from './queries/select';
import Remove from './queries/remove';

export default {
  removeTodo: Remove.remove(),
  findTodo: Select.find()
};
