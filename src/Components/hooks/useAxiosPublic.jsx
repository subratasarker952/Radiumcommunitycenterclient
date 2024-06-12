import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'http://localhost:5000',

})

const useAxiosPublic = () => {
    axiosPublic.interceptors.request.use(function (config) {
        // Do something before request is sent
        // config.headers.authorization = `bearer ${localStorage.getItem('token')}`
        // console.log(config);
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    // Add a response interceptor
    axiosPublic.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    });
    return axiosPublic;
};

export default useAxiosPublic;