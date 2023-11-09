const fetchActivity = async () => {

  const apiRes = await fetch(`http://www.boredapi.com/api/activity/`);

  if (!apiRes.ok) {
    throw new Error(`fetch not ok`);
  }

  return apiRes.json();
};

export default fetchActivity;
