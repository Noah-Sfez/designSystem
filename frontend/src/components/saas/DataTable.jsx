import React, { useState } from 'react';
import { useTheme } from '../../themes/ThemeProvider';
import { GlassCard } from '../ui/GlassCard';
import { GlassButton } from '../ui/GlassButton';
import { GlassInput } from '../ui/GlassInput';

export const DataTable = ({ 
  data = [], 
  columns = [], 
  searchable = true,
  sortable = true,
  pagination = true,
  pageSize = 10,
  className = '' 
}) => {
  const { theme } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = data.filter(item =>
    Object.values(item).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortField) return 0;
    
    const aValue = a[sortField];
    const bValue = b[sortField];
    
    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const totalPages = Math.ceil(sortedData.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = sortedData.slice(startIndex, startIndex + pageSize);

  const tableStyles = {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: 'transparent'
  };

  const headerStyles = {
    backgroundColor: 'var(--color-surface)',
    backdropFilter: `blur(var(--backdrop-blur))`,
    WebkitBackdropFilter: `blur(var(--backdrop-blur))`,
    borderBottom: '2px solid var(--color-border)'
  };

  const headerCellStyles = {
    padding: '1rem',
    textAlign: 'left',
    color: 'var(--color-text)',
    fontWeight: '600',
    fontSize: '0.875rem',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    cursor: sortable ? 'pointer' : 'default',
    transition: 'all 0.2s'
  };

  const rowStyles = {
    borderBottom: '1px solid var(--color-border)',
    transition: 'all 0.3s'
  };

  const cellStyles = {
    padding: '1rem',
    color: 'var(--color-text)',
    fontSize: '0.875rem'
  };

  const controlsStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
    gap: '1rem',
    flexWrap: 'wrap'
  };

  const paginationStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginTop: '1rem'
  };

  const handleSort = (field) => {
    if (!sortable) return;
    
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleRowHover = (e) => {
    e.currentTarget.style.backgroundColor = 'var(--color-surface)';
    e.currentTarget.style.transform = 'translateX(4px)';
  };

  const handleRowLeave = (e) => {
    e.currentTarget.style.backgroundColor = 'transparent';
    e.currentTarget.style.transform = 'translateX(0)';
  };

  const handleHeaderHover = (e) => {
    if (sortable) {
      e.currentTarget.style.backgroundColor = 'var(--color-border)';
    }
  };

  const handleHeaderLeave = (e) => {
    if (sortable) {
      e.currentTarget.style.backgroundColor = 'transparent';
    }
  };

  return (
    <GlassCard className={`data-table ${className}`}>
      {searchable && (
        <div style={controlsStyles}>
          <GlassInput
            placeholder="Rechercher..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ maxWidth: '300px' }}
          />
          <div style={{ color: 'var(--color-textMuted)', fontSize: '0.875rem' }}>
            {sortedData.length} résultat(s)
          </div>
        </div>
      )}

      <div style={{ overflowX: 'auto' }}>
        <table style={tableStyles}>
          <thead style={headerStyles}>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  style={headerCellStyles}
                  onClick={() => handleSort(column.key)}
                  onMouseEnter={handleHeaderHover}
                  onMouseLeave={handleHeaderLeave}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {column.label}
                    {sortable && sortField === column.key && (
                      <span style={{ fontSize: '0.75rem' }}>
                        {sortDirection === 'asc' ? '↑' : '↓'}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, index) => (
              <tr
                key={index}
                style={rowStyles}
                onMouseEnter={handleRowHover}
                onMouseLeave={handleRowLeave}
              >
                {columns.map((column) => (
                  <td key={column.key} style={cellStyles}>
                    {column.render ? column.render(row[column.key], row) : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {pagination && totalPages > 1 && (
        <div style={paginationStyles}>
          <GlassButton
            size="sm"
            variant="secondary"
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            Précédent
          </GlassButton>
          
          <div style={{ display: 'flex', gap: '0.25rem' }}>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <GlassButton
                key={page}
                size="sm"
                variant={currentPage === page ? 'primary' : 'secondary'}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </GlassButton>
            ))}
          </div>

          <GlassButton
            size="sm"
            variant="secondary"
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
          >
            Suivant
          </GlassButton>
        </div>
      )}
    </GlassCard>
  );
};