import { css, cx } from "@emotion/css";
import { TableHTMLAttributes, useEffect, useState } from "react";
import { Theme, Typography, theme } from "../index";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { orderBy } from "lodash";

interface TableColumnType<RecordType> {
  title: string;
  dataIndex: string;
  key: string;
  sortable?: boolean;
  sorter?: (value: RecordType) => void;
  render?: (value: any, record: RecordType) => React.ReactNode;
}

interface TableProps<RecordType> extends TableHTMLAttributes<HTMLTableElement> {
  columns: TableColumnType<RecordType>[];
  dataSource: RecordType[];
  stickyHeader?: boolean;
  stickyHeaderBackgroundColor?: string;
}

export const tableStyles = () => css`
  margin: 0;
  padding: 0;
  overflow: scroll;
  width: 100%;
`;

export const headerStyles = (stickyHeaderBackgroundColor: any) => css`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${stickyHeaderBackgroundColor};
`;

const headerCellStyles = (theme: Theme) => css`
  padding: 8px 12px;
  text-align: left;
  height: 52px;
  border-bottom: 1px solid ${theme.color.gray};
`;

const dataCellStyles = (theme: Theme) => css`
  border-bottom: 1px solid ${theme.color.gray};
  padding: 8px 12px;
`;

const bodyCellStyles = (theme: Theme) => css`
  height: 52px;
  font-size: 14px;
  color: ${theme.palette.gray[600]};

  &:hover {
    background-color: ${theme.color.gray};
  }
`;

const titleCellStyles = () => css`
  display: flex;
  gap: 8px;
  align-items: center;handleDescSort
`;

const cellStyles = (theme: Theme) => css`
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${theme.palette.gray[400]};

  .active {
    color: ${theme.color.primary};
  }

  .icon-up {
    margin-bottom: -5px;
  }
`;

function Table<RecordType>(props: TableProps<RecordType>) {
  const { dataSource, columns, stickyHeader, stickyHeaderBackgroundColor } =
    props;

  const [currentSortColumnIndex, setCurrentSortColumnIndex] = useState<
    string | null
  >(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);

  const [items, setItems] = useState<RecordType[]>(dataSource || []);

  const handleSort = (
    dataIndex: string,
    sorter?: (value: RecordType) => void
  ) => {
    let sortType: "desc" | "asc" | null = sortOrder;

    if (currentSortColumnIndex !== dataIndex) {
      sortType = "asc";
    } else {
      switch (sortType) {
        case null:
          sortType = "asc";
          break;
        case "asc":
          sortType = "desc";
          break;
        case "desc":
          sortType = null;
          break;
        default:
          sortType = "asc";
          break;
      }
    }

    if (sortType === null) {
      setItems(dataSource || []);
    } else {
      setItems(orderBy([...items], [sorter || dataIndex], [sortType]));
    }
    setCurrentSortColumnIndex(dataIndex);
    setSortOrder(sortType);
  };

  useEffect(() => {
    setItems(dataSource || []);
  }, [dataSource]);

  return (
    <table className={cx(tableStyles())}>
      <thead>
        <tr
          className={
            stickyHeader ? cx(headerStyles(stickyHeaderBackgroundColor)) : ""
          }
        >
          {columns.map(({ title, key, dataIndex, sortable, sorter }) => {
            return (
              <th key={key} scope="col" className={cx(headerCellStyles(theme))}>
                <div className={cx(titleCellStyles())}>
                  <Typography fontWeight={500} variant="body5" color="gray.200">
                    {title}
                  </Typography>
                  {sortable && dataIndex && (
                    <div className={cx(cellStyles(theme))}>
                      <FontAwesomeIcon
                        onClick={() => handleSort(dataIndex, sorter)}
                        icon={faCaretUp}
                        fontSize={10}
                        className={cx("icon-up", {
                          active:
                            sortOrder === "asc" &&
                            dataIndex === currentSortColumnIndex,
                        })}
                      />
                      <FontAwesomeIcon
                        onClick={() => handleSort(dataIndex, sorter)}
                        icon={faCaretDown}
                        fontSize={10}
                        className={cx({
                          active:
                            sortOrder === "desc" &&
                            dataIndex === currentSortColumnIndex,
                        })}
                      />
                    </div>
                  )}
                </div>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="bg-color-white">
        {items.map((row, rowIndex) => (
          <tr key={rowIndex} className={cx(bodyCellStyles(theme))}>
            {columns.map((column, colIndex) => (
              <td className={cx(dataCellStyles(theme))} key={colIndex}>
                {column.render
                  ? column.render(
                      row[column.dataIndex as keyof RecordType],
                      row
                    )
                  : (row[
                      column.dataIndex as keyof RecordType
                    ] as React.ReactNode)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
export type { TableProps, TableColumnType };
