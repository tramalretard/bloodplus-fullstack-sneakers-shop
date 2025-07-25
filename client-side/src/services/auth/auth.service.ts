import { axiosDefault } from '@/api/api.interceptors'
import { IAuthForm, IAuthResponse } from '@/shared/types/auth.interface'
import { API_URL } from '@/config/api.constants'
import {
	removeTokenFromStorage,
	saveTokenInStorage,
} from './access-token.service'

class AuthService {
	async main(type: 'login' | 'register', data: IAuthForm) {
		const url =
			type === 'login' ? API_URL.auth.login() : API_URL.auth.register()

		const response = await axiosDefault<IAuthResponse>({
			url,
			method: 'POST',
			data,
		})

		if (response.data.accessToken) saveTokenInStorage(response.data.accessToken)

		return response
	}

	async getNewTokens() {
		const response = await axiosDefault<IAuthResponse>({
			url: API_URL.auth.accessToken(),
			method: 'POST',
		})

		if (response.data.accessToken) saveTokenInStorage(response.data.accessToken)

		return response
	}

	async logout() {
		const response = await axiosDefault<boolean>({
			url: API_URL.auth.logout(),
			method: 'POST',
		})

		if (response.data) removeTokenFromStorage()

		return response
	}
}

export const authService = new AuthService()
