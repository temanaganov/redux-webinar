import { useDispatch, useSelector } from '../../hooks/redux';
import { fetchUsersThunk } from '../../store/reducers/users';

export const UsersList = () => {
	const { data, loading, error } = useSelector(state => state.users);
	const dispatch = useDispatch();

	const onFetchUsers = () => {
		dispatch(fetchUsersThunk());
	};

	if (error) return <h1>{error}</h1>;

	if (loading) return <h1>Загрузка пользователей</h1>;

	return (
		<div>
			<button type="button" onClick={onFetchUsers}>
				Загрузить пользователей
			</button>
			<ol>
				{data.map(user => (
					<li key={user.id}>
						{user.name} &lt;{user.email}&gt;
					</li>
				))}
			</ol>
		</div>
	);
};
