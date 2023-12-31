const skills = [
    {id: 10, skill: 'HTML', done: true},
    {id: 15, skill: 'CSS',  done: true},
    {id: 20, skill: 'javascript', done: true},
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

 function update(id, skillsUpdate){
    const idx =skills.findIndex(skill => skill.id === parseInt(id));
    let skill = skills[idx];
    skill = {
        ...skill,
    }
 }

 function deleteOne(id) {
	const idx = skills.findIndex(skill => skill.id === parseInt(id));
	todos.splice(idx, 1);
  }

  function create(skill) {
	// Add the id
	skills.id = Date.now() % 1000000;
	skill.done = false;
	skill.push(skill);
  return skill
  }

  function getAll() {
	return skills;
  }

  function getOne(id) {
	// Use the Array.prototype.find iterator method
	return skills.find(skill => skill.id === parseInt(id));
  }