"use client"
import { likePost } from "@/actions/post-action";
import useLikePost from "@/lib/hooks/swr-hooks/use-like-post";
import { PostResponseDto } from "@/service/api-types";
import { dateFormat } from "@/utils/date-format";
import { Button, Divider, Flex, Space, Spin } from "antd";
import { useTransition } from "react";

type Props = {
  post: PostResponseDto;
}

function PostCard({ post }: Props) {
  const { likePostData, isLoading, mutate } = useLikePost(post._id);

  const [isPending, startTransition] = useTransition()
  const handleLike = () => {
    startTransition(async () => {
      await likePost({
        patient: '72706f6e670123456789abcd',
        post: post._id
      }).then(() => {
        mutate()
      })
    })
  }

  return (
    <Space direction="vertical" className="border w-full rounded-md p-4">
      {/** Header */}
      <Flex justify="space-between" align="center">
        <Space direction="vertical">
          <p>
            {post.patient.username}
          </p>
          <p>
            {post.patient._id}
          </p>
        </Space>
        <Flex vertical align="end">
          <p>
            {dateFormat({
              date: post.updatedAt,
              formatType: 'DD-MM-YYYY'
            }).newDate}&nbsp;
          </p>
          <p>
            {dateFormat({
              date: post.updatedAt,
              formatTime: 'hh:mm'
            }).newTime}
          </p>
        </Flex>
      </Flex>

      <Divider />

      {/** Body */}
      <Space direction="vertical">
        <p>
          {post.body}
        </p>
        <p>
          {post._id}
        </p>
      </Space>

      <Divider />

      {/** Footer */}
      <Space align="start">
        <Flex vertical>
          <Button disabled={isPending} onClick={handleLike}>
            Like {post.like_count}
          </Button>
          {isLoading && <Spin />}
          {!isLoading && likePostData?.filter(post => post.is_like).map(post => (
            <div key={post._id}>
              {post?.patient?.username}
            </div>
          ))}
        </Flex>
        <Button>
          Comment
        </Button>
      </Space>
    </Space>
  )
}

export default PostCard