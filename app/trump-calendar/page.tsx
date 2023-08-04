import { Client } from "@notionhq/client";
import {
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { ExtractResponse } from "../../utils/notionUtils";

async function getCalendar({
  databaseId,
  notionClient,
}: {
  notionClient: Client;
  databaseId: string;
}) {
  const response = await notionClient.databases.query({
    database_id: databaseId,
  });

  return response.results as PageObjectResponse[];
}

const TrumpCalendar = async () => {
  const notionClient = new Client({
    auth: process.env.NOTION_INTEGRATION_TOKEN_TRUMP_CALENDAR,
  });

  const calendarData = await getCalendar({
    notionClient,
    databaseId: process.env.NOTION_DATABASE_ID_TRUMP_CALENDAR || "",
  });

  type Formula = ExtractResponse<"formula">;
  const data = calendarData.map((entry) => ({
    lastEditedTime: entry.last_edited_time,
    title: (entry.properties.Name as ExtractResponse<"title">).title
      .map((section) => section.plain_text)
      .join(""),
    slug: (
      (entry.properties.slug as Formula).formula as Extract<
        Formula["formula"],
        { type: "string" }
      >
    ).string,
    type: (entry.properties.type as ExtractResponse<"select", "type">).select,
    date: (entry.properties.date as ExtractResponse<"date">).date,
    case: (entry.properties.case as ExtractResponse<"multi_select", "case">)
      .multi_select,
    location: (
      entry.properties.location as ExtractResponse<"multi_select", "location">
    ).multi_select,
  }));

  return (
    <>
      {data.map((entry, index) => {
        return <div key={index}>{entry.title}</div>;
      })}
    </>
  );
};

export default TrumpCalendar;
