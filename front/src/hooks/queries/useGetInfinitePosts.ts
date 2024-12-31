import {getPosts, ResponsePost} from '@/api';
import {queryKeys} from '@/constants';
import {ResponseError} from '@/types';
import {InfiniteData, QueryKey, useInfiniteQuery, UseInfiniteQueryOptions} from '@tanstack/react-query';

function useGetInfinitePosts(
    queryOptions?: UseInfiniteQueryOptions<
        ResponsePost[],
        ResponseError,
        InfiniteData<ResponsePost[], number>,
        ResponsePost[],
        QueryKey,
        number
    >
) {
    return useInfiniteQuery({
        queryFn: ({pageParam}) => getPosts(pageParam),
        queryKey: [queryKeys.GET_POST, queryKeys.GET_POSTS],
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            const lastPost = lastPage[lastPage.length - 1];
            return lastPost ? allPages.length + 1 : undefined;
        },
        ...queryOptions,
    });
}

export default useGetInfinitePosts;
