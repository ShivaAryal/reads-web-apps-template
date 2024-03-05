import { Button, Form, Input, message } from "antd";
import React, { useState } from "react";
import config from "./../../Entities/dev.config.json";
import WordCloud from "./wordCloud";

const GetAiSummary = (props) => {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const articleAbstracts = props.articleAbstracts;

  const onFinish = (values) => {
    const apiKey = values.chatgptApiKey;
    chatGptSummary(apiKey);
  };

  const chatGptSummary = async (apiKey) => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              { role: "system", content: "You are a helpful assistant." },
              ...articleAbstracts.map((abstract) => ({
                role: "user",
                content: abstract,
              })),
            ],
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch common summary");
      }

      const data = await response.json();
      const generatedCommonSummary = data.choices[0].message.content;

      setLoading(false);
      setSummary(generatedCommonSummary);
    } catch (error) {
      console.error("Error fetching common summary:", error.message);
      setLoading(false);
      message.error(error.message);
    }
  };

  return (
    <div>
      <h4>Get AI Summary</h4>
      <Form
        style={{ marginTop: 20, marginBottom: -20 }}
        name="basic"
        layout="vertical"
        onFinish={onFinish}
      >
        <Button
          loading={loading}
          onClick={() => chatGptSummary(config.SAMPLE_CHATGPT_API_KEY)}
          style={{ marginBottom: 20 }}
        >
          Get Summary with Sample API Key
        </Button>
        <Form.Item
          label="Enter ChatGPT API Key"
          name="chatgptApiKey"
          rules={[
            {
              required: true,
              message: "Please input your ChatGPT API Key!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ float: "right" }}
            loading={loading}
          >
            Get ChatGPT Summary
          </Button>
        </Form.Item>

        {summary && (
          <>
            <h4>Summary:</h4>
            {summary}
            <WordCloud text={summary} />
          </>
        )}
      </Form>
    </div>
  );
};

export default GetAiSummary;
