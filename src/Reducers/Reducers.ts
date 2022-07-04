import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

const createRootReducer = (history) =>
	// в данном кейсе нам не нужен redux, но я это оставил лишь для демонстрации архитектуры приложения с использованием redux'a
	combineReducers({
		router: connectRouter(history),
	});

export default createRootReducer;
