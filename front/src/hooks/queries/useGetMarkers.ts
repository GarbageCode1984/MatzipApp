import {getMarkers} from '@/api';
import {queryKeys} from '@/constants';
import {Marker, UseQueryCustomOptions} from '@/types';
import {queryOptions, useQuery} from '@tanstack/react-query';

function useGetMarkers(QueryOptions?: UseQueryCustomOptions<Marker[]>) {
    return useQuery({
        queryFn: getMarkers,
        queryKey: [queryKeys.MARKER, queryKeys.GET_MARKERS],
        ...queryOptions,
    });
}

export default useGetMarkers;
